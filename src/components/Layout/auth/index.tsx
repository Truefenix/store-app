'use client';

import Image from 'next/image';
import { BodyPLayout, Container, Section, TituloLayout } from './style';
import React from 'react';

interface LayoutAuthProps {
  children: React.ReactNode;
}

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    <Container>
      <Section>
        <div>
          <Image
            src="/favicon.png"
            alt="logo"
            width={16}
            height={16}
            style={{ height: 'auto' }}
          />

          <div style={{ marginTop: '1.25rem', color: 'white' }}>
            <TituloLayout>Manage your file the best way</TituloLayout>
            <BodyPLayout>
              This is a place you can store all your documents
            </BodyPLayout>
          </div>
        </div>
      </Section>
      {children}
    </Container>
  );
}
