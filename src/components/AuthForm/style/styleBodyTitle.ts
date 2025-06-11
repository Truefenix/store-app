'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/400.css'; // regular
import '@fontsource/poppins/500.css'; // medium

export const BodyTitleUm = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.regular};
    font-size: 16px};
    line-height: 24px;
  `}
`;

export const BodyTitleDois = styled.div`
  ${({ theme }) => css`
    margin-left: 8rem;
    margin-bottom: 2rem;
    color: ${theme.redPaleta.redUm};
    font-weight: ${theme.Font.weights.medium};
    font-size: ${theme.Font.sizes.large};
    line-height: 20px;
  `}
`;
