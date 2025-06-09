import { Container } from './style';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
}
