import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mockShow } from '../../../data/mockShow';
import { BrowserRouter } from 'react-router-dom';
import Cast from './Cast';

const cast = mockShow._embedded.cast;

const MockCast = () => {
  return (
    <BrowserRouter>
      <Cast cast={cast} />
    </BrowserRouter>
  );
};

describe('Cast Component', () => {
  it('should render cast cards', () => {
    render(<MockCast />);
    const cards = screen.getAllByTestId('cast-card');

    expect(cards.length).toBe(cast.length);
    expect(screen.getByText(/Teal'c/i)).toBeInTheDocument();
    expect(screen.getByText(/Samantha Carter/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr. Daniel Jackson/i)).toBeInTheDocument();
    expect(screen.getByText(/Jack O'Neill/i)).toBeInTheDocument();
  });
});
