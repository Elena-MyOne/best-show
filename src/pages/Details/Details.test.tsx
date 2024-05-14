import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import Details from './Details';
import { mockShow } from '../../data/mockShow';

const MockDetailsPage = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>
  );
};

describe('Details page', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => mockShow,
      })
    );

    await act(async () => {
      render(<MockDetailsPage />);
    });
  });

  it('the detailed card component correctly displays the detailed card data', async () => {
    await waitFor(() => screen.getAllByTestId('details'));
    expect(screen.getByTestId('details-image')).toBeInTheDocument();
    expect(screen.getByTestId('details-name')).toBeInTheDocument();
    expect(screen.getByTestId('details-rating')).toBeInTheDocument();
    expect(screen.getByTestId('details-summary')).toBeInTheDocument();
    expect(screen.getByText(/Go Back/i)).toBeInTheDocument();
  });

  it('clicking the close button hides the component', async () => {
    fireEvent.click(screen.getByText(/Go Back/i));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });
});
