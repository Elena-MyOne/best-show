import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import People from './People';
import { store } from '../../redux/store';
import { mockPeople } from '../../mocks/mockPeople';
import { setPeople, setSearchPerson } from '../../redux/slices/PeopleSlice';

const MockPeople = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <People />
      </BrowserRouter>
    </Provider>
  );
};

describe('People component', () => {
  it('should return default layout', () => {
    render(<MockPeople />);
    const button = screen.getByRole('button', { name: /go back/i });
    const text = screen.getByText(/nothing to show/i);
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('should renders an error message', async () => {
    await act(async () => {
      store.dispatch(setSearchPerson('error'));
      store.dispatch(setPeople([]));
    });
    render(<MockPeople />);
    const errorText = await screen.findByText(
      /Oops error accrued! Cannot show searched actors list/i
    );
    expect(errorText).toBeInTheDocument();
  });

  it('should render people list when data is passed', async () => {
    await act(async () => {
      store.dispatch(setSearchPerson('Bob'));
      store.dispatch(setPeople(mockPeople));
    });
    render(<MockPeople />);
    expect(screen.getByText('Search:')).toBeInTheDocument();
    const card1 = await screen.findByRole('heading', { name: 'Bob Banks' }, { timeout: 1500 });
    expect(card1).toBeInTheDocument();
    const card2 = await screen.findByRole('heading', { name: 'Bob McCracken' }, { timeout: 1500 });
    expect(card2).toBeInTheDocument();
  });
});
