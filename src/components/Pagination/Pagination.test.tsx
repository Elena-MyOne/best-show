import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Pagination from './Pagination';
import { store } from '../../redux/store';
import { loadShows, setApiCallPage, setCurrentPage } from '../../redux/slices/ShowsSlice';
import { LAST_PAGE } from '../../constants/page.constants';
import { mockShowsList } from '../../mocks/mockShow';

const MockPagination = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    </Provider>
  );
};

describe('Pagination component', () => {
  it('should disable previous button on the first page', async () => {
    render(<MockPagination />);

    const prevButton = screen.getByTestId('prev-button');
    expect(prevButton).toBeDisabled();
  });

  it('should disable next button on the last page', async () => {
    await act(async () => {
      store.dispatch(setApiCallPage(LAST_PAGE));
      store.dispatch(setCurrentPage(LAST_PAGE));
    });

    render(<MockPagination />);
    const nextButton = screen.getByTestId('next-button');
    expect(nextButton).toBeDisabled();
  });

  it('should navigate to the next page on next button click', async () => {
    await act(async () => {
      store.dispatch(setApiCallPage(0));
      store.dispatch(setCurrentPage(0));
      store.dispatch(loadShows(mockShowsList));
    });

    render(<MockPagination />);

    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(store.getState().shows.apiCallPage).toBe(1);
      expect(store.getState().shows.currentPage).toBe(1);
    });
  });

  it('should navigate to the previous page on previous button click', async () => {
    await act(async () => {
      store.dispatch(setApiCallPage(1));
      store.dispatch(setCurrentPage(1));
      store.dispatch(loadShows(mockShowsList));
    });

    render(<MockPagination />);

    const prevButton = screen.getByTestId('prev-button');
    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(store.getState().shows.apiCallPage).toBe(0);
      expect(store.getState().shows.currentPage).toBe(0);
    });
  });

  it('should handle the last page button click correctly', async () => {
    await act(async () => {
      store.dispatch(setApiCallPage(0));
      store.dispatch(setCurrentPage(0));
      store.dispatch(loadShows(mockShowsList));
    });

    render(<MockPagination />);

    const lastButton = screen.getByTestId('last-button');
    fireEvent.click(lastButton);

    await waitFor(() => {
      expect(store.getState().shows.apiCallPage).toBe(LAST_PAGE);
      expect(store.getState().shows.currentPage).toBe(LAST_PAGE);
    });
  });
});
