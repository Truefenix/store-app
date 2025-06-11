'use client';
import { theme } from '@/style/theme';
import styled from 'styled-components';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// .auth-form
export const StyleAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 800px;
  width: 100%;
  max-width: 580px;
  transition: all 0.2s ease-in-out;

  /* Espaçamento vertical entre elementos filhos */
  & > * + * {
    margin-top: 1.5rem;

    @media (min-width: 1024px) {
      margin-top: 2rem;
    }
  }

  @media (min-width: 1024px) {
    height: 100%;
  }
`;

// .shad-form-item
export const StyleFormItem = styled(FormItem)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 3px solid ${theme.darkPaleta.blueDark};
  background-color: ${theme.aleatorioPaleta.aleatorioSeis};
  transition: border 0.2s;

  &:focus-within {
    background-color: ${theme.verdePaleta.verdeUm};
    border-color: ${theme.verdePaleta.verdeCinco};
  }
`;

// .shad-form-label
export const StyleFormLabel = styled(FormLabel)`
  color: ${theme.darkPaleta.blueDark};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

// .shad-input
export const ShadInput = styled(Input)`
  background-color: transparent;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  outline: none !important;
  color: rgb(20, 19, 19);
  font-size: 1.8rem;
  font-weight: ${theme.Font.weights.bold};
`;

// .shad-form-message
export const StyleFormMessage = styled(FormMessage)`
  margin-top: 0.3rem;
  margin-left: 1rem;
  color: ${theme.redPaleta.redUm};
  font-size: 1.5rem;
  font-weight: ${theme.Font.weights.bold};
`;

// form-submit-button
export const StyledButton = styled(Button)`
  width: 100%;
  max-width: 600px;
  margin: 1.5rem auto 0 auto;
  display: block;

  font-weight: 600;
  font-size: 1.9rem;
  padding: 0.75rem 1.5rem;
  height: 66px;

  border: none;
  border-radius: 9999px;

  background-color: ${theme.darkPaleta.blueRegular};
  color: ${theme.aleatorioPaleta.aleatorioSeis};

  transition:
    background-color 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background-color: ${theme.redPaleta.redTres ||
    '#2563eb'}; /* azul mais claro no hover */
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
  }
`;
