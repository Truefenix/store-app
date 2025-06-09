'use client';
import { styled, css } from 'styled-components';
import '@fontsource/poppins/400.css'; // regular

export const StyleUtilButton = styled.button`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.regular};
    font-size: 14px;
    line-height: 20px;
  `}
`;
export const StyleUtilCaption = styled.caption`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.regular};
    font-size: 12px;
    line-height: 16px;
  `}
`;
