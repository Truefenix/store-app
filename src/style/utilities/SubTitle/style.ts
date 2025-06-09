'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/600.css'; // semibold
import '@fontsource/poppins/500.css'; // medium

export const SubTitle1 = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.medium};
    font-size: 16px;
    line-height: 24px;
  `}
`;
export const SubTitle2 = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.semiBold};
    font-size: 14px;
    line-height: 20px;
  `}
`;
