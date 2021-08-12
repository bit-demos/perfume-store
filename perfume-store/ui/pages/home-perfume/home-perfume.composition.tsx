import React from 'react';
import { MemoryRouter } from 'react-router';
import { TangerineFont } from '@learn-bit-react/base-ui.styles.fonts.tangerine-font';
import { HomePerfume } from './home-perfume';

export const BasicHomePerfume = () => (
  <MemoryRouter>
    <TangerineFont />
    <HomePerfume />
  </MemoryRouter>
);
