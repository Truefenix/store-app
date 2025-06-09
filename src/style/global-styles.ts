'use client';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    // Text
    font-family: ${theme.Font.family.fontTextPoppins};
    color: ${theme.aleatorioPaleta.aleatorioCinco};
  }
`;
