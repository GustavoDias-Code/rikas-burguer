import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Section, SocialLinks, AppSection } from './styles';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content className="container">
        <Section>
          <div className="logo">
            <img src="/images/logo/logo.png" alt="Rikas Burguer" />
          </div>
          <p>
            Desde 2020 servindo os melhores hambúrgueres artesanais da cidade, 
            com ingredientes selecionados e muito amor em cada preparo.
          </p>
          <SocialLinks>
            <a href="https://www.instagram.com/rikas.burguer/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5511943563172" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </Section>

        <Section>
          <h3>Horário de Funcionamento</h3>
          <p>
            <FaClock /> Almoço: Segunda a sexta-feira
          </p>
          <p className="hours">11h às 14h</p>
          <p>
            <FaClock /> Jantar: Quinta a domingo
          </p>
          <p className="hours">18h30 às 22h30</p>
        </Section>

        <Section>
          <h3>Contato</h3>
          <p>
            <FaPhone /> (11) 94356-3172
          </p>
          <p>
            <FaWhatsapp /> (11) 94356-3172
          </p>
          <p>
            <FaMapMarkerAlt /> Rua Ucilla Lorencini Tafarello, 278
          </p>
          <p className="address">Terra da Uva - Jundiaí/SP</p>
        </Section>

        <Section>
          <h3>Links Úteis</h3>
          <nav>
            <Link to="/cardapio">Cardápio</Link>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/lojas">Nossa Loja</Link>
            <Link to="/contato">Fale Conosco</Link>
            <Link to="/pedidos">Faça seu Pedido</Link>
          </nav>
        </Section>

        <AppSection>
          <h3>Faça seu pedido pelo App</h3>
          <div className="app-links">
            <a 
              href="https://www.ifood.com.br/delivery/jundiai-sp/rika-s-burguer-residencial-terra-da-uva/5c9b67ed-f575-4573-a1a5-e9cb857ecf16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-button"
            >
              <SiIfood />
            </a>
          </div>
        </AppSection>
      </Content>

      <div className="bottom">
        <div className="container">
          <p>© 2024 Rikas Burguer. Todos os direitos reservados.</p>
          <p>
            Siga-nos no Instagram:{' '}
            <a href="https://www.instagram.com/rikas.burguer/" target="_blank" rel="noopener noreferrer">
              @rikas.burguer
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}; 