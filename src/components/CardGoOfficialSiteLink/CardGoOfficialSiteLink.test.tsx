import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardGoOfficialSiteLink from './CardGoOfficialSiteLink';

const mockUrl = 'http://stargate.mgm.com/view/series/1/index.html';

describe('CardGoOfficialSiteLink component', () => {
  it('renders go to official site link', () => {
    render(<CardGoOfficialSiteLink url={mockUrl} />);
    const text = screen.getByText(/Go to official site/i);
    expect(text).toBeInTheDocument();
  });
});
