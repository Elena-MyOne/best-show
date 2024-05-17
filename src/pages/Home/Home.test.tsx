import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { store } from '../../redux/store';
import Home from './Home';
import { setApiCallPage, setShows } from '../../redux/slices/ShowsSlice';

const MockHomePage = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
};

describe('Home component', () => {
  it('should render default home page layout', async () => {
    await act(async () => {
      render(<MockHomePage />);
    });
    const heading = screen.getByRole('heading', { name: /shows list/i });
    const showTitle1 = await screen.findByRole('heading', {
      name: /stargate sg-1/i,
    });
    const showTitle2 = await screen.findByRole('heading', {
      name: /stargate universe/i,
    });
    expect(heading).toBeInTheDocument();
    expect(showTitle1).toBeInTheDocument();
    expect(showTitle2).toBeInTheDocument();
  });

  it('should render error message', async () => {
    await act(async () => {
      store.dispatch(setApiCallPage(1000));
      store.dispatch(setShows([]));
    });

    render(<MockHomePage />);

    const errorText = await screen.findByText(/Error occurred please try later/i);
    expect(errorText).toBeInTheDocument();
  });
});
