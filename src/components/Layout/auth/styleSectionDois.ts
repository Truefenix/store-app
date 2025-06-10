'use client';

import styled, { css } from 'styled-components';
import '@fontsource/poppins/700.css'; // bold
import '@fontsource/poppins/400.css'; // regular
import Image from 'next/image';

export const SectionDois = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.aleatorioPaleta.aleatorioSeis};
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 40px;
    padding-bottom: 40px;
  `}

  @media (min-width: 1024px) {
    justify-content: center;
    padding: 40px; /* p-10 */
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const StyleDivDois = styled.div`
  margin-bottom: 64px; /* mb-16 */

  @media (min-width: 1024px) {
    display: none; /* lg:hidden */
  }
`;
export const StyleImageDois = styled(Image)`
  height: auto; /* h-auto */
  width: 200px; /* w-[200px] */

  @media (min-width: 1024px) {
    width: 250px; /* lg:w-[250px] */
  }
`;
