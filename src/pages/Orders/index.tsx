import React from 'react';
import { Container, DeliveryOptions } from './styles';
import { FaStore, FaWhatsapp } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';

export const Orders: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h1>Faça seu Pedido</h1>
        
        <h2>Escolha como deseja receber seu pedido</h2>
        
        <DeliveryOptions>
          <a 
            href="https://www.ifood.com.br/delivery/jundiai-sp/rika-s-burguer-residencial-terra-da-uva/5c9b67ed-f575-4573-a1a5-e9cb857ecf16" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="delivery ifood"
          >
            <SiIfood />
            <h3>iFood</h3>
            <p>Peça pelo iFood e receba em casa</p>
          </a>

          <a 
            href="https://wa.me/5511943563172" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="delivery whatsapp"
          >
            <FaWhatsapp />
            <h3>Delivery Próprio</h3>
            <p>Peça diretamente conosco pelo WhatsApp</p>
          </a>

          <div className="pickup">
            <FaStore />
            <h3>Retirada</h3>
            <p>Retire seu pedido em nossa loja</p>
            <div className="pickup-buttons">
              <a 
                href="https://maps.app.goo.gl/ftdPhbqH129wB7e8A"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-button"
              >
                Ver no Maps
              </a>
              <a 
                href="https://wa.me/5511943563172"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Pedir para Retirada
              </a>
            </div>
          </div>
        </DeliveryOptions>
      </div>
    </Container>
  );
}; 