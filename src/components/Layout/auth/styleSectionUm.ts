'use client';

import styled, { css } from 'styled-components';
import Image from 'next/image';
import '@fontsource/poppins/700.css'; // bold
import '@fontsource/poppins/400.css'; // regular

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export const Section = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.aleatorioPaleta.aleatorioSeis};
    padding: 2.5rem;
    display: none;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;

    // Retira o conteudo no min da tela
    @media (min-width: 1024px) {
      display: flex;
    }

    @media (min-width: 1280px) {
      width: 40%;
    }
  `}
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 800px;
  max-width: 430px;
  gap: 3rem;
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
export const StyledImage = styled(Image)`
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(2deg) scale(1.05);
  }
`;
export const StyledImageLogo = styled(Image)`
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(-5deg) scale(1.1);
  }
`;
