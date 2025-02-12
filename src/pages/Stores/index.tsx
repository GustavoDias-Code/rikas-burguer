import React, { useState } from 'react';
import { Container, StoreInfo, MapSection, InfoSection } from './styles';
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

// Coordenadas da Rikas Burguer
// Rua Ucilla Lorencini Tafarello, 278, Terra da Uva - Jundiaí/SP
const center = {
  lat: -23.1862137,
  lng: -46.8976504
};

const markerPosition = {
  lat: -23.1862137,
  lng: -46.8976504
};

export const Stores: React.FC = () => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  return (
    <Container>
      <div className="container">
        <h1>Nossa Loja</h1>

        <StoreInfo>
          <MapSection>
            <div className="map-container">
              <LoadScript googleMapsApiKey="AIzaSyAa3nKoFybU8jywW060M35vYlpBQxsGIEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker 
                    position={markerPosition}
                    onClick={() => setIsInfoWindowOpen(true)}
                  >
                    {isInfoWindowOpen && (
                      <InfoWindow
                        position={markerPosition}
                        onCloseClick={() => setIsInfoWindowOpen(false)}
                      >
                        <div style={{ padding: '8px', maxWidth: '200px' }}>
                          <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#333' }}>Rika's Burguer</h3>
                          <p style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                            Rua Ucilla Lorencini Tafarello, 278
                          </p>
                          <p style={{ fontSize: '14px', color: '#666' }}>
                            Terra da Uva - Jundiaí/SP
                          </p>
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                </GoogleMap>
              </LoadScript>
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