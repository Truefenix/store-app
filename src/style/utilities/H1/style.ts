'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/700.css'; // Bold weights da font poppins

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.aleatorioPaleta.aleatorioCinco};
    font-family: ${theme.Font.family.fontTextPoppins};
    font-weight: ${theme.Font.weights.bold};
    font-size: ${theme.Font.px.px34};
    line-height: 42px;
  `}
`;
