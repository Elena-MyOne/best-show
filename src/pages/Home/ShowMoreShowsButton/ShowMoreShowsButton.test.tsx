import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import ShowMoreShowsButton from './ShowMoreShowsButton';

let isMoreShows = true;

const MockShowMoreShowsButton = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ShowMoreShowsButton isMoreShows={isMoreShows} showMoreShows={vi.fn()} />
      </BrowserRouter>
    </Provider>
  );
};

describe('ShowMoreShowsButton', () => {
  it('renders "Show more" button when isMoreShows is true', () => {
    render(<MockShowMoreShowsButton />);
    const button = screen.getByTestId('show-more-shows-button');
    expect(button).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Show less');
  });

  it('renders "Show more" button when isMoreShows is false', () => {
    isMoreShows = false;
    render(<MockShowMoreShowsButton />);
    const button = screen.getByTestId('show-more-shows-button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Show more');
  });
});
