import { fireEvent, render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { describe, it, expect, vi } from 'vitest';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(() => mockNavigate),
}));

describe('404 Page component', () => {
  it('404 page is s displayed when navigating to an invalid route', () => {
    render(<NotFound />);
    const notFoundText = screen.getByText(/Oh, man. Page not found/i);
    expect(notFoundText).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should go back on button click', async () => {
    render(<NotFound />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement, new MouseEvent('click', { bubbles: true }));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
