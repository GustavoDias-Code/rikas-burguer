import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, ImageContainer } from './styles';

export const Hero: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Content>
          <h1>O Melhor Hambúrguer da Cidade</h1>
          <p>
            Experimente nossos hambúrgueres artesanais feitos com ingredientes selecionados
            e muito amor.
          </p>
          <Link to="/cardapio">Ver Cardápio</Link>
        </Content>

        <ImageContainer>
          <img 
            src="/images/hero-burger.jpg" 
            alt="Hambúrguer suculento"
            loading="lazy"
          />
        </ImageContainer>
      </div>
    </Container>
  );
}; 