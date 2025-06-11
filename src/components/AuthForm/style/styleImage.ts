import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

// Define a animação spin
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Componente estilizado com margin-left e animação de spin
export const StyleImageUm = styled(Image)`
  margin-bottom: -0.6rem;
  margin-left: 1rem;
  animation: ${spin} 1s linear infinite;
`;
