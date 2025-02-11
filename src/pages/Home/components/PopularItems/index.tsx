import React from 'react';
import { Container, Grid, Card } from './styles';
import { Link } from 'react-router-dom';

const popularBurgers = [
  {
    id: 1,
    name: "Rika's Especial",
    description: 'Pão brioche, 2 carnes de 180g, queijo cheddar, bacon, alface, tomate, cebola roxa e molho especial da casa.',
    price: 40.99,
    image: '/images/burgers/rikas-especial.jpg'
  },
  {
    id: 2,
    name: 'Big Cheese Tudo',
    description: 'Pão brioche, 2 carnes de 180g, 4 fatias de queijo cheddar, bacon, alface, tomate, cebola roxa e molho especial.',
    price: 39.99,
    image: '/images/burgers/big-cheese.jpg'
  },
  {
    id: 3,
    name: "Rika's Vegetariano",
    description: 'Pão brioche, hambúrguer de grão de bico, queijo, alface, tomate, cebola roxa e molho especial.',
    price: 34.99,
    image: '/images/burgers/vegetariano.jpg'
  },
  {
    id: 4,
    name: 'Cheddar Bacon',
    description: 'Pão brioche, carne de 180g, queijo cheddar, bacon crocante, alface, tomate e molho especial.',
    price: 32.99,
    image: '/images/burgers/cheddar-bacon.jpg'
  }
];

export function PopularItems() {
  return (
    <Container>
      <h2>Mais Vendidos</h2>
      <Grid>
        {popularBurgers.map((burger) => (
          <Card key={burger.id}>
            <img src={burger.image} alt={burger.name} />
            <div className="content">
              <h3>{burger.name}</h3>
              <p>{burger.description}</p>
              <span>R$ {burger.price.toFixed(2)}</span>
              <Link to="/cardapio" className="order-button">
                Ver Cardápio Completo
              </Link>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
} 