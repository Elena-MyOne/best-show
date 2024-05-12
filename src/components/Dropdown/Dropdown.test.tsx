import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import Dropdown from './Dropdown';
import { fireEvent, render, screen } from '@testing-library/react';

const mockOptions = [1, 2, 3];
const mockSelectedSeason = 1;

const MockDropdown = () => {
  return (
    <BrowserRouter>
      <Dropdown
        options={mockOptions}
        selectedSeason={mockSelectedSeason}
        setSelectedSeason={vi.fn()}
      />
    </BrowserRouter>
  );
};

describe('Dropdown component', () => {
  it('render Dropdown component', () => {
    render(<MockDropdown />);
    const text = screen.getByText(/Season 1/i);
    expect(text).toBeInTheDocument();
  });

  it('toggle dropdown visibility when clicked', () => {
    render(<MockDropdown />);
    const button = screen.getByText(/Season 1/i);
    fireEvent.click(button);
    const content = screen.getByText(/Season 2/i);
    expect(content).toBeInTheDocument();
    fireEvent.click(button);
    expect(content).not.toBeInTheDocument();
  });

  it('update selected season when a season it clicked', () => {
    render(<MockDropdown />);
    const button = screen.getByText(/Season 1/i);
    fireEvent.click(button);

    const option = screen.queryByText(/Season 2/i);
    expect(option).toBeInTheDocument();

    if (option) fireEvent.click(option);
    const selectedSeasonText = screen.queryByText(/Season 2/i);
    expect(selectedSeasonText).not.toBeInTheDocument();
  });
});
