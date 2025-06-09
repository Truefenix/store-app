'use client';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.verdePaleta.verdeDois};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `}
`;

export const Titulo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 700;
    color: ${theme.aleatorioPaleta.aleatorioCinco};
  `}
`;
