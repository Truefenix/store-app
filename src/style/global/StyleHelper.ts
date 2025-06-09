'use client';

import { createGlobalStyle, css } from 'styled-components';

export const Helper = createGlobalStyle`
  .overline {
    ${({ theme }) => css`
      font-weight: ${theme.Font.weights.regular};
      font-size: 10px;
      line-height: 14px;
    `}
  }
  /* ===== HELPER CLASSES */
  .container {
      margin-left: auto;
      margin-right: auto;
      max-width: 80rem; /* 1280px */
      padding-left: 1.25rem; /* 20px */
      padding-right: 1.25rem; /* 20px */
  }
  .primary-btn {
        background-color: #3490dc !important; /* exemplo de brand */
        transition: all 0.2s ease-in-out;
        border-radius: 9999px;
  }
  .primary-btn:hover {
        background-color: #6cb2eb;
  }
  .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
  }
`;
