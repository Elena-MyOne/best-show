import { BrowserRouter } from 'react-router-dom';
import EpisodesList from './EpisodesList';
import { mockEpisodesList } from '../../mocks/mockEpisodes';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';

const MockEpisodesList = () => {
  return (
    <BrowserRouter>
      <EpisodesList episodesList={mockEpisodesList} />
    </BrowserRouter>
  );
};

describe('EpisodesList component', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => mockEpisodesList,
      })
    );

    await act(async () => {
      render(<MockEpisodesList />);
    });
  });

  it('render episodes list', async () => {
    expect(screen.queryByText('1. Air: Part 1'));
    expect(screen.queryByText('2. Air: Part 2'));
    expect(screen.queryByText('3. Air: Part 3'));
  });
});
