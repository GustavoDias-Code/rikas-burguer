import React from 'react';
import { Hero } from '../../components/Hero';
import { PopularItems } from './components/PopularItems';
import { Container } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <PopularItems />
    </Container>
  );
}; 