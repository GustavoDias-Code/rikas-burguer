import React, { useState, useEffect } from 'react';
import { Container, StoreInfo, MapSection, InfoSection, PhoneModal } from './styles';
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigindo o ícone do marcador
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Coordenadas da Rikas Burguer
// R. Ucilla Lorencini Tafarelo, N°278 - CECAP, Jundiaí - SP, 13214-680
const position: L.LatLngExpression = [-23.140166, -46.920611];

export const Stores: React.FC = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      setShowPhoneModal(true);
    }
  };

  return (
    <Container>
      <div className="container">
        <h1>Nossa Loja</h1>

        <StoreInfo>
          <MapSection>
            <div className="map-container">
              <MapContainer 
                center={position}
                zoom={17}
                scrollWheelZoom={true}
                style={{ height: '400px', width: '100%', borderRadius: '8px' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    <strong>Rika's Burguer</strong><br />
                    R. Ucilla Lorencini Tafarelo, 278<br />
                    CECAP - Jundiaí/SP<br />
                    CEP: 13214-680
                  </Popup>
                </Marker>
              </MapContainer>
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
                  onClick={handlePhoneClick}
                >
                  <FaPhone /> Ligar Agora
                </a>
              </div>
            </div>
          </MapSection>

          <InfoSection>
            <div className="info-block">
              <h2>Endereço</h2>
              <p>
                <FaMapMarkerAlt />
                R. Ucilla Lorencini Tafarelo, 278
              </p>
              <p className="details">CECAP - Jundiaí/SP</p>
              <p className="details">CEP: 13214-680</p>
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
          </InfoSection>
        </StoreInfo>
      </div>

      {showPhoneModal && (
        <PhoneModal>
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowPhoneModal(false)}>
              <FaTimes />
            </button>
            <h3>Telefone para Contato</h3>
            <p className="phone-number">(11) 94356-3172</p>
          </div>
        </PhoneModal>
      )}
    </Container>
  );
}; 