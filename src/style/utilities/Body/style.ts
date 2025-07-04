'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/400.css'; // regular
import '@fontsource/poppins/500.css'; // medium

export const Body1 = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.regular};
    font-size: 16px};
    line-height: 24px;
  `}
`;
export const Body2 = styled.div`
  ${({ theme }) => css`
    color: ${theme.redPaleta.redUm};
    font-weight: ${theme.Font.weights.medium};
    font-size: ${theme.Font.sizes.large};
    line-height: 20px;
  `}
`;
