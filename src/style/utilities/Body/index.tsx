'use client';

import React from 'react';
import { Body1, Body2 } from './style';

interface TitleProps {
  text?: 'body-1' | 'body-2';
  children: React.ReactNode;
}

export default function Titulo({ text = 'body-1', children }: TitleProps) {
  if (text === 'body-1') return <Body1>{children}</Body1>;
  if (text === 'body-2') return <Body2>{children}</Body2>;

  // fallback (nunca deve acontecer, mas por segurança)
  return <Body1>{children}</Body1>;
}
