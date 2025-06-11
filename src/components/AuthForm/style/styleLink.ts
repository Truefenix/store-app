import { theme } from '@/style/theme';
import Link from 'next/link';
import styled from 'styled-components';

export const StyleLink = styled(Link)`
  color: ${theme.darkPaleta.blueDark};
  font-size: ${theme.Font.sizes.medium};
  margin-left: 0.25rem;
`;
