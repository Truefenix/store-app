'use client';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.azulPaleta.azulCinco};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `}
`;
