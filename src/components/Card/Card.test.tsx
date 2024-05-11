import { BrowserRouter } from 'react-router-dom';
import Card from './Card';
import { mockShow } from '../../data/mockShow';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

const MockCard = () => {
  return (
    <BrowserRouter>
      <Card show={mockShow} />
    </BrowserRouter>
  );
};

describe('Card component', () => {
  it('renders error message when show is null', () => {
    render(<Card show={null} />);
    const errorMessage = screen.getByText(
      /Show is not available in this moment, please try later/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders card component when show is provided', () => {
    render(<MockCard />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });

  it('navigates to details page when clicked', async () => {
    render(<MockCard />);
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);

    const expectedURL = `/shows/details/${mockShow.id}`;
    expect(window.location.pathname).toBe(expectedURL);
  });
});
