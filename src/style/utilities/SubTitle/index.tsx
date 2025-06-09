'use client';

import React from 'react';
import { SubTitle1, SubTitle2 } from './style';

interface TitleProps {
  text?: 'subtitle-1' | 'subtitle-2';
  children: React.ReactNode;
}

export default function Titulo({ text = 'subtitle-1', children }: TitleProps) {
  if (text === 'subtitle-1') return <SubTitle1>{children}</SubTitle1>;
  if (text === 'subtitle-2') return <SubTitle2>{children}</SubTitle2>;

  // fallback (nunca deve acontecer, mas por segurança)
  return <SubTitle1>{children}</SubTitle1>;
}
