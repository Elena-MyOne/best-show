import CardItems from './CardItems';
import { mockShowsList } from '../../mocks/mockShow';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const MockCardItems = () => {
  return (
    <BrowserRouter>
      <CardItems shows={mockShowsList} />
    </BrowserRouter>
  );
};

describe('CardItems component rendering', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => mockShowsList,
      })
    );

    await act(async () => {
      render(<MockCardItems />);
    });
  });

  it('render cards and verify component has the specified number of cards', async () => {
    const cards = await waitFor(() => screen.getAllByTestId('card'));

    expect(screen.getByText(/Stargate SG-1/i)).toBeInTheDocument();
    expect(screen.getByText(/Stargate Universe/i)).toBeInTheDocument();
    expect(cards.length).toBe(2);
  });
});
