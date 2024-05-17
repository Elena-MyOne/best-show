import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Seasons from './Seasons';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { mockEpisodesList } from '../../../mocks/mockEpisodes';

const id = '207';

const MockSeasons = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Seasons id={id} />
      </BrowserRouter>
    </Provider>
  );
};

describe('Seasons component when it is error', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() => Promise.reject({}));

    await act(async () => {
      render(<MockSeasons />);
    });
  });

  afterEach(() => {
    global.fetch = vi.fn().mockImplementation(() => {});
  });

  it('should render error message when error ocurred', () => {
    const text = screen.getByText(
      'Something goes wrong, seasons are not available, please try again later'
    );
    expect(text).toBeInTheDocument();
  });
});

describe('Seasons component when data resolved', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => mockEpisodesList,
      })
    );

    await act(async () => {
      render(<MockSeasons />);
    });
  });

  afterEach(() => {
    global.fetch = vi.fn().mockImplementation(() => {});
  });

  it('should render episodes list', () => {
    expect(screen.queryByText('1. Air: Part 1'));
    expect(screen.queryByText('2. Air: Part 2'));
    expect(screen.queryByText('3. Air: Part 3'));
  });
});
