import React from 'react';
import { Container, Grid, Card } from './styles';
import { Link } from 'react-router-dom';

const popularBurgers = [
  {
    id: 1,
    name: 'Big Cheese Tudo',
    description: 'Pão, dois hambúrguers artesanal 120g cada, queijo derretido, maionese especial, dobro de bacon, 2 ovos fritos, alface e tomate.',
    price: 32.99,
    image: '/images/burgers/big-cheese.jpeg'
  },
  {
    id: 2,
    name: 'Cheese Salada',
    description: 'Pão, hambúrguer artesanal 120g, queijo derretido, alface, tomate e maionese especial.',
    price: 21.99,
    image: '/images/burgers/cheese-salada.jpeg'
  },
  {
    id: 3,
    name: 'Cheddar Bacon',
    description: 'Pão, hambúrguer artesanal 120g, cheddar, cebola frita no shoyo, bacon em tiras e maionese.',
    price: 26.99,
    image: '/images/burgers/cheddar-bacon.jpeg'
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