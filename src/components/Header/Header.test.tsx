import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/ShowsSlice';

const mockLocalStorage = 'girl';

const MockHeader = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
};

describe('Header component', () => {
  it('render header logo as a link with correct text', () => {
    render(<MockHeader />);
    const logo = screen.getByTestId('header-logo');
    expect(logo).toBeInTheDocument();

    const logoLink = screen.getByRole('link');
    expect(logoLink).toBeInTheDocument();
  });

  it('render search form and respond to user input', () => {
    render(<MockHeader />);
    const FormElement = screen.getByTestId('search-form');
    const input = screen.getByPlaceholderText('Search show...') as HTMLInputElement;
    const submitButton = screen.getByTestId('header-submit-button');

    expect(FormElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'girl' } });
    expect(input.value).toBe('girl');
  });
});

describe('Header search functionality', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('save input value in local storage', () => {
    render(<MockHeader />);

    const submitButton = screen.getByTestId('header-submit-button') as HTMLButtonElement;
    const input = screen.getByPlaceholderText('Search show...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'girl' } });
    fireEvent.click(submitButton);
    expect(mockLocalStorage).toBe('girl');
  });

  it('retrieves the value from local storage upon mounting', () => {
    const initialValue = 'initialValue';
    localStorage.setItem('TVShowSearch', initialValue);
    render(<MockHeader />);
    const input = screen.getByPlaceholderText('Search show...') as HTMLInputElement;
    expect(input.value).toBe(initialValue);
  });

  it('dispatches setSearchValue action when submit button is clicked', () => {
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    render(<MockHeader />);
    const input = screen.getByPlaceholderText('Search show...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'stargate' } });

    const submitButton = screen.getByTestId('header-submit-button') as HTMLButtonElement;
    fireEvent.click(submitButton);

    const expectedAction = setSearchValue('stargate');
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
