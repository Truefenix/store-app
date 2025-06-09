'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/700.css'; // Bold
import '@fontsource/poppins/600.css'; // semibold
import '@fontsource/poppins/500.css'; // medium

export const ContainerH1 = styled.div`
  ${({ theme }) => css`
    color: ${theme.aleatorioPaleta.aleatorioCinco};
    font-family: ${theme.Font.family.fontTextPoppins};
    font-weight: ${theme.Font.weights.bold};
    font-size: ${theme.Font.px.px34};
    line-height: 42px;
  `}
`;
export const ContainerH2 = styled.div`
  ${({ theme }) => css`
    color: ${theme.aleatorioPaleta.aleatorioCinco};
    font-family: ${theme.Font.family.fontTextPoppins};
    font-weight: ${theme.Font.weights.bold};
    font-size: 24px;
    line-height: 36px;
  `}
`;
export const ContainerH3 = styled.div`
  ${({ theme }) => css`
    color: ${theme.aleatorioPaleta.aleatorioCinco};
    font-family: ${theme.Font.family.fontTextPoppins};
    font-weight: ${theme.Font.weights.semiBold};
    font-size: 20;
    line-height: 28px;
  `}
`;
export const ContainerH4 = styled.div`
  ${({ theme }) => css`
    color: ${theme.aleatorioPaleta.aleatorioCinco};
    font-family: ${theme.Font.family.fontTextPoppins};
    font-weight: ${theme.Font.weights.medium};
    font-size: 18px;
    line-height: 20px;
  `}
`;
export const ContainerH5 = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.Font.weights.semiBold};
    font-size: 16px;
    line-height: 24px;
  `}
`;
