import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PersonCard from './PersonCard';
import { mockPerson } from '../../../data/mockPeople';

const MockPersonCard = () => {
  return (
    <BrowserRouter>
      <PersonCard person={mockPerson} />
    </BrowserRouter>
  );
};

describe('PersonCard component', () => {
  it('Person name is rendering', () => {
    render(<MockPersonCard />);
    const name = screen.getByText(mockPerson.name) as HTMLHeadingElement;
    expect(name).toBeInTheDocument();
  });
  it('Go to official site link is rendering', () => {
    render(<MockPersonCard />);
    const link = screen.getByText(/Go to official site/i) as HTMLLinkElement;
    expect(link).toBeInTheDocument();
  });
});
