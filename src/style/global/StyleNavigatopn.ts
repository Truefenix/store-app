'use client';

import { createGlobalStyle } from 'styled-components';

export const Navigation = createGlobalStyle`
/* Sidebar & MobileNavigation */

.nav-icon {
  width: 1.5rem; /* w-6 = 24px = 1.5rem */
  filter: invert(1);
  opacity: 0.25 !important;
}

.nav-icon-active {
  filter: invert(0);
  opacity: 1 !important;
}
`;
