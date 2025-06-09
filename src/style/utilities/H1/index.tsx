'use client';

import { Container } from './style';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export default function H1({ children }: TitleProps) {
  return <Container>{children}</Container>;
}
