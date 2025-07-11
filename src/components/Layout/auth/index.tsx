'use client';

import {
  BodyPLayout,
  Container,
  Section,
  TituloLayout,
  StyledImage,
  StyledImageLogo,
  StyledDiv,
} from './styleSectionUm';
import { SectionDois, StyleDivDois, StyleImageDois } from './styleSectionDois';
import React from 'react';

interface LayoutAuthProps {
  children: React.ReactNode;
}

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    // StyleSectionUm
    <Container>
      <Section>
        <StyledDiv>
          <StyledImageLogo
            src="/Logo.png"
            alt="logo"
            width={224}
            height={82}
            style={{ height: 'auto', marginLeft: '9rem' }}
          />

          <div style={{ marginTop: '1.25rem', color: 'white' }}>
            <TituloLayout>Manage your file the best way</TituloLayout>
            <BodyPLayout>
              This is a place you can store all your documents
            </BodyPLayout>
          </div>
          <StyledImage
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
          />
        </StyledDiv>
        {/* styleSectionDois */}
      </Section>
      <SectionDois>
        <StyleDivDois>
          <StyleImageDois
            src="/logo-full-brand.png"
            alt="logo"
            width={224}
            height={82}
          />
        </StyleDivDois>
        {children}
      </SectionDois>
    </Container>
  );
}
