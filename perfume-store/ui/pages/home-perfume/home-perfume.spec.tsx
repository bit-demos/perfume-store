import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomePerfume } from './home-perfume.composition';

it('should render with the correct text', () => {
  const { getAllByText } = render(<BasicHomePerfume />);
  const rendered = getAllByText('Your Number 1 Perfume Shop');
  expect(rendered).toBeTruthy();
});
