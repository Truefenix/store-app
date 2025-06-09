'use client';

import { Container, Titulo } from './style';
import React from 'react';

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <Container>
      <Titulo>{text}</Titulo>
    </Container>
  );
}
