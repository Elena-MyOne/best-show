import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { setSearchPerson } from '../../redux/slices/PeopleSlice';

const mockStore = configureStore();
const store = mockStore();

const MockFooter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

describe('Footer component', () => {
  it('render footer link', () => {
    render(<MockFooter />);
    const link = screen.getByText('MyOne');
    expect(link).toHaveAttribute('href', 'https://myoneweb.us/');
  });

  it('render input field and respond to user input', () => {
    render(<MockFooter />);
    const input = screen.getByPlaceholderText('Name') as HTMLInputElement;
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Bob' } });
    expect(input.value).toBe('Bob');
  });

  it('dispatches setSearchPerson action when button is clicked', () => {
    render(<MockFooter />);
    const input = screen.getByPlaceholderText('Name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Bob' } });

    const submitButton = screen.getByTestId('footer-submit-button');
    fireEvent.click(submitButton);

    const dispatchedActions = store.getActions();
    const expectedAction = setSearchPerson('Bob');
    expect(dispatchedActions).toContainEqual(expectedAction);
  });
});
