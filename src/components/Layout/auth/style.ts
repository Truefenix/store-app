'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/700.css'; // bold
import '@fontsource/poppins/400.css'; // regular

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export const Section = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.aleatorioPaleta.aleatorioCinco};
    padding: 2.5rem;
  `}
`;

export const TituloLayout = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.bold};
    font-size: ${theme.Font.px.px34};
    line-height: 42px;
  `}
`;
export const BodyPLayout = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.regular};
    font-size: 16px;
    line-height: 24px;
  `}
`;
