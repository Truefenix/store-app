import { theme } from '@/style/theme';
import styled from 'styled-components';

export const StyleErrorMessage = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: ${theme.Font.weights.bold};
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  border-radius: 1rem;
  background-color: rgba(
    255,
    0,
    0,
    0.05
  ) !important; /* bg-error/5 - vermelho claro com opacidade */
  padding: 1rem 2rem;
  text-align: center;
  color: ${theme.redPaleta.redUm};
`;
