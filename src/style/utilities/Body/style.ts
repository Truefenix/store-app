'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/400.css'; // regular

export const Body1 = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.regular};
    font-size: 16px};
    line-height: 24px;
  `}
`;
export const Body2 = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.regular};
    font-size: 14px;
    line-height: 20px;
  `}
`;
