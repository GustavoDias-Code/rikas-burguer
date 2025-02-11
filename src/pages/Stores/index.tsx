import React from 'react';
import { Container, StoreInfo, MapSection, InfoSection } from './styles';
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from 'react-icons/fa';

export const Stores: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h1>Nossa Loja</h1>

        <StoreInfo>
          <MapSection>
            <div className="map-container">
              <a 
                href="https://maps.app.goo.gl/ftdPhbqH129wB7e8A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/images/map-preview.jpg" 
                  alt="Localização da Rikas Burguer"
                  className="map-image"
                />
                <div className="map-overlay">
                  <span>Abrir no Google Maps</span>
                </div>
              </a>
            </div>
          </MapSection>

          <InfoSection>
            <div className="info-block">
              <h2>Endereço</h2>
              <p>
                <FaMapMarkerAlt />
                Rua Ucilla Lorencini Tafarello, 278
              </p>
              <p className="details">Terra da Uva - Jundiaí/SP</p>
              <a 
                href="https://maps.app.goo.gl/ftdPhbqH129wB7e8A"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-button"
              >
                Como Chegar
              </a>
            </div>

            <div className="info-block">
              <h2>Horário de Funcionamento</h2>
              <div className="schedule">
                <div>
                  <h3><FaClock /> Almoço</h3>
                  <p>Segunda a sexta-feira</p>
                  <p className="time">11h às 14h</p>
                </div>
                <div>
                  <h3><FaClock /> Jantar</h3>
                  <p>Quinta a domingo</p>
                  <p className="time">18h30 às 22h30</p>
                </div>
              </div>
            </div>

            <div className="info-block">
              <h2>Contato</h2>
              <div className="contact-buttons">
                <a 
                  href="https://wa.me/5511943563172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a 
                  href="tel:+5511943563172"
                  className="phone-button"
                >
                  <FaPhone /> Ligar Agora
                </a>
              </div>
            </div>
          </InfoSection>
        </StoreInfo>
      </div>
    </Container>
  );
}; 