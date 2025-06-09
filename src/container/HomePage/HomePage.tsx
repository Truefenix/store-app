'use client';

import Center from '@/style/utilities/Center';
import Container from './style';
import Titulo from '@/style/utilities/Title';

export default function HomePage() {
  return (
    <Container>
      <Center>
        <Titulo text="h1">
          store-app - The only storage solution you need
        </Titulo>
      </Center>
    </Container>
  );
}
