import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';
import { BrowserRouter } from 'react-router-dom';

const MockLogo = () => {
  return (
    <BrowserRouter>
      <Logo />
    </BrowserRouter>
  );
};

describe('Logo component', () => {
  it('render Logo as a link with corrected text', () => {
    render(<MockLogo />);
    const text = screen.getByText('Shows');
    expect(text).toBeInTheDocument();

    const logoLink = screen.getByRole('link');
    expect(logoLink).toBeInTheDocument();
  });
});
