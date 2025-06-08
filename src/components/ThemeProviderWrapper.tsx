'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';
import { GlobalStyles } from '../style/global-styles';

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
