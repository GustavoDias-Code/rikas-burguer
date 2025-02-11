import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, StoreList, StoreCard, MapContainer } from './styles';
import { FaMapMarkerAlt, FaClock, FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const store = {
  id: 1,
  name: 'Rikas Burguer',
  address: 'Rua Ucilla Lorencini Tafarello, 278',
  neighborhood: 'Terra da Uva',
  city: 'Jundiaí',
  state: 'SP',
  phone: '(11) 94356-3172',
  instagram: 'www.instagram.com/rikas.burguer/',
  hours: {
    lunch: 'Segunda a sexta-feira, das 11h às 14h',
    dinner: 'Quinta a domingo, das 18h30 às 22h30'
  },
  location: {
    lat: -23.185700,
    lng: -46.897800
  }
};

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ]
};

export const Stores: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h1>Nossa Loja</h1>

        <MapContainer>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={store.location}
              zoom={16}
              options={mapOptions}
            >
              <Marker
                position={store.location}
                title={store.name}
              />
            </GoogleMap>
          </LoadScript>
        </MapContainer>

        <StoreList>
          <StoreCard>
            <h3>{store.name}</h3>
            <div className="info">
              <div className="section">
                <h4>Endereço</h4>
                <p>
                  <FaMapMarkerAlt />
                  {store.address}
                </p>
                <p className="neighborhood">{store.neighborhood}</p>
                <p className="city">{store.city} - {store.state}</p>
              </div>

              <div className="section">
                <h4>Horário de Funcionamento</h4>
                <p>
                  <FaClock />
                  <strong>Almoço:</strong>
                </p>
                <p className="hours">Segunda a sexta-feira</p>
                <p className="time">11h às 14h</p>
                <p>
                  <FaClock />
                  <strong>Jantar:</strong>
                </p>
                <p className="hours">Quinta a domingo</p>
                <p className="time">18h30 às 22h30</p>
              </div>

              <div className="section">
                <h4>Contato</h4>
                <p>
                  <FaPhone />
                  {store.phone}
                </p>
                <p>
                  <FaWhatsapp />
                  {store.phone}
                </p>
                <p>
                  <FaInstagram />
                  @rikas.burguer
                </p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://maps.app.goo.gl/ftdPhbqH129wB7e8A"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-button"
              >
                Como Chegar
              </a>
              <a
                href="https://wa.me/5511943563172"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </StoreCard>
        </StoreList>
      </div>
    </Container>
  );
}; 