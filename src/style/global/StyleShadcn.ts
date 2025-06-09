'use client';

import { createGlobalStyle } from 'styled-components';

export const Shadcn = createGlobalStyle`
    /* ===== SHADCN OVERRIDES ===== */

.shad-no-focus {
  outline: none !important;
}
.shad-no-focus:focus,
.shad-no-focus:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

.shad-input {
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  outline: none !important;
  color: #a0a0a0; /* substitua por a cor desejada da placeholder */
  font-size: 0.875rem; /* body-2 padrão */
  font-weight: 400;
}

.shad-form-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb; /* light-300 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* shadow-drop-1 */
}

.shad-form-label {
  padding-top: 0.5rem;
  width: 100%;
  color: #d1d5db; /* light-100 */
  font-size: 0.875rem;
  font-weight: 400;
}

.shad-form-message {
  margin-left: 1rem;
  color: #f81f62; /* red */
  font-size: 0.875rem;
  font-weight: 400;
}

.shad-alert-dialog {
  background-color: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 1.875rem;
  max-width: 95%;
  outline: none !important;
}
@media (min-width: 640px) {
  .shad-alert-dialog {
    width: fit-content;
  }
}
@media (min-width: 768px) {
  .shad-alert-dialog {
    border-radius: 30px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.shad-submit-btn {
  background-color: #005b96; /* brand */
  color: white;
  border-radius: 9999px;
  transition: all 0.3s ease;
}
.shad-submit-btn:hover {
  background-color: #0073c2; /* brand-100 */
}

.shad-otp {
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  width: 100%;
}
@media (min-width: 640px) {
  .shad-otp {
    gap: 0.5rem;
  }
}

.shad-otp-slot {
  font-size: 40px;
  font-weight: 500;
  border-radius: 0.75rem;
  border: 2px solid #e5e7eb; /* light-300 */
  color: #005b96; /* brand-100 */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 3rem;
  height: 3rem;
  gap: 1.25rem;
}
@media (min-width: 768px) {
  .shad-otp-slot {
    width: 4rem;
    height: 4rem;
  }
}

.shad-sheet {
  padding-top: 0 !important;
}

.shad-sheet button,
.shad-dialog button {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.shad-dropdown-item {
  cursor: pointer !important;
}

.shad-dialog {
  width: 90%;
  max-width: 400px;
  padding: 2rem 1.5rem;
  border-radius: 26px;
}

.shad-chart-title {
  color: #ffffff !important;
}

.shad-select-item {
  cursor: pointer !important;
}
`;
