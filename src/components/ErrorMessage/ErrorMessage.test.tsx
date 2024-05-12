import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
  it('render error message', () => {
    render(<ErrorMessage />);
    const text = screen.getByText('Error occurred please try later');
    expect(text).toBeInTheDocument();
  });
});
