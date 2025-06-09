'use client';

import React from 'react';
import {
  ContainerH1,
  ContainerH2,
  ContainerH3,
  ContainerH4,
  ContainerH5,
} from './style';

interface TitleProps {
  text?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
}

export default function Titulo({ text = 'h1', children }: TitleProps) {
  if (text === 'h1') return <ContainerH1>{children}</ContainerH1>;
  if (text === 'h2') return <ContainerH2>{children}</ContainerH2>;
  if (text === 'h3') return <ContainerH3>{children}</ContainerH3>;
  if (text === 'h4') return <ContainerH4>{children}</ContainerH4>;
  if (text === 'h5') return <ContainerH5>{children}</ContainerH5>;

  // fallback (nunca deve acontecer, mas por segurança)
  return <ContainerH1>{children}</ContainerH1>;
}
