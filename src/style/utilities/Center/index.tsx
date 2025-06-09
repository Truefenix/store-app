'use client';

import { Container } from './style';
import React from 'react';

interface CenterProps {
  children: React.ReactNode;
}

export default function Center({ children }: CenterProps) {
  return <Container>{children}</Container>;
}
