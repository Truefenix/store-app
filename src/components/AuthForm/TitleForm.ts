import { theme } from '@/style/theme';
import styled from 'styled-components';

// .form-title
export const TitleFormH1 = styled.h1`
  text-align: center !important;
  font-size: ${theme.Font.sizes.large};
  font-weight: ${theme.Font.weights.bold};

  @media (min-width: 768px) {
    text-align: left !important;
  }
`;
