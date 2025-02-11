import React from 'react';
import { Container, Content, ImageGrid } from './styles';

export const About: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Content>
          <h1>Nossa História</h1>
          <p>
            A Rikas Burguer nasceu da paixão por hambúrgueres artesanais e da busca pela
            excelência em cada detalhe. Fundada em 2020, nossa hamburgueria se destaca
            pelo compromisso com ingredientes de alta qualidade e receitas exclusivas.
          </p>
          <p>
            Nossos blends são preparados diariamente com carnes selecionadas, e cada
            hambúrguer é montado com ingredientes frescos e pães artesanais, assados
            em nossa própria padaria.
          </p>

          <h2>Nossos Diferenciais</h2>
          <ul>
            <li>Blend exclusivo de carnes nobres</li>
            <li>Pães artesanais feitos diariamente</li>
            <li>Molhos especiais da casa</li>
            <li>Ingredientes frescos e selecionados</li>
          </ul>
        </Content>

        <ImageGrid>
          <img src="/images/about-1.jpg" alt="Preparo dos hambúrgueres" loading="lazy" />
          <img src="/images/about-2.jpg" alt="Nossa cozinha" loading="lazy" />
          <img src="/images/about-3.jpg" alt="Equipe Rikas" loading="lazy" />
          <img src="/images/about-4.jpg" alt="Hambúrguer sendo preparado" loading="lazy" />
        </ImageGrid>
      </div>
    </Container>
  );
}; 