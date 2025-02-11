import React from 'react';
import { Container, MenuSection, MenuItem } from './styles';

const menuItems = {
  burgers: [
    {
      id: 1,
      name: 'Americano',
      description: 'Ovo, maionese, alface e tomate.',
      price: 19.99,
      image: '/images/burger.jpg'
    },
    {
      id: 2,
      name: 'Big Cheese Tudo',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido, maionese especial, dobro de bacon, 2 ovos fritos, alface e tomate.',
      price: 39.99,
      image: '/images/burger.jpg'
    },
    {
      id: 3,
      name: 'Cheddar Bacon',
      description: 'Pão, hambúrguer artesanal 120g, cheddar, cebola frita no shoyo, bacon em tiras e maionese.',
      price: 32.99,
      image: '/images/burger.jpg'
    },
    {
      id: 4,
      name: 'Cheese Bacon',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido, maionese especial e bacon.',
      price: 28.99,
      image: '/images/burger.jpg'
    },
    {
      id: 5,
      name: 'Cheese Burguer',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido e maionese especial.',
      price: 23.99,
      image: '/images/burger.jpg'
    },
    {
      id: 6,
      name: 'Cheese Egg Salada',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido, maionese especial, ovo frito, alface e tomate.',
      price: 27.99,
      image: '/images/burger.jpg'
    },
    {
      id: 7,
      name: 'Cheese Salada',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido, alface, tomate e maionese especial.',
      price: 25.99,
      image: '/images/burger.jpg'
    },
    {
      id: 8,
      name: "Rika's Especial",
      description: 'Pão, contra filé em tiras, queijo derretido, queijo gorgonzola, bacon, cebola no shoyo, maionese especial, alface e tomate.',
      price: 40.99,
      image: '/images/burger.jpg'
    },
    {
      id: 9,
      name: "Rika's Vegetariano",
      description: 'Pão de hambúrguer, hambúrguer vegetariano (5 opções: brócolis com mandioca, ervilha, lentilha, mexicano e grão de bico com batata doce), maionese, alface e tomate.',
      price: 34.99,
      image: '/images/burger.jpg'
    },
    {
      id: 10,
      name: "Rika's Churrasco",
      description: 'Pão, contra filé, queijo derretido, maionese especial, alface e tomate.',
      price: 33.99,
      image: '/images/burger.jpg'
    }
  ],
  portions: [
    {
      id: 11,
      name: 'Frango com bacon e Catupiry',
      description: 'Deliciosa porção de frango com bacon e Catupiry.',
      price: 39.99,
      image: '/images/portions.jpg'
    },
    {
      id: 12,
      name: 'Fritas com bacon e cheddar',
      description: 'Batatas fritas crocantes com bacon e cheddar.',
      price: 35.99,
      image: '/images/portions.jpg'
    },
    {
      id: 13,
      name: 'Calabresa acebolada',
      description: 'Porção de calabresa acebolada.',
      price: 39.99,
      image: '/images/portions.jpg'
    },
    {
      id: 14,
      name: 'Contra filé na chapa com cebola',
      description: 'Suculento contra filé na chapa com cebola.',
      price: 52.99,
      image: '/images/portions.jpg'
    },
    {
      id: 15,
      name: 'Batata frita',
      description: 'Porção de batatas fritas crocantes.',
      price: 27.99,
      image: '/images/portions.jpg'
    },
    {
      id: 16,
      name: 'Anéis de Cebola',
      description: 'Porção de crocantes anéis de cebola (250g).',
      price: 18.99,
      image: '/images/portions.jpg'
    }
  ],
  sauces: [
    {
      id: 17,
      name: 'Maionese Temperada',
      description: 'Maionese da casa temperada com salsinha e cebolinha, pote com 50ml.',
      price: 3.99,
      image: '/images/sauce.jpg',
      serves: 'Serve 1 pessoa'
    },
    {
      id: 18,
      name: 'Maionese Tradicional',
      description: 'Maionese da casa pote com 50ml.',
      price: 3.99,
      image: '/images/sauce.jpg',
      serves: 'Serve 1 pessoa'
    }
  ],
  drinks: [
    {
      id: 19,
      name: 'Brahma Duplo Malte',
      description: '350ml',
      price: 8.00,
      image: '/images/drinks.jpg'
    },
    {
      id: 20,
      name: 'Coca-Cola',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks.jpg'
    },
    {
      id: 21,
      name: 'Fanta Laranja',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks.jpg'
    },
    {
      id: 22,
      name: 'Fanta Uva',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks.jpg'
    },
    {
      id: 23,
      name: 'Schweppes Citrus',
      description: '350ml',
      price: 7.90,
      image: '/images/drinks.jpg'
    },
    {
      id: 24,
      name: 'Schweppes Tônica',
      description: '350ml',
      price: 5.00,
      image: '/images/drinks.jpg'
    },
    {
      id: 25,
      name: 'Sprite',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks.jpg'
    },
    {
      id: 26,
      name: 'Água com Gás',
      description: '510ml',
      price: 3.50,
      image: '/images/drinks.jpg'
    },
    {
      id: 27,
      name: 'Água Mineral',
      description: '510ml',
      price: 3.00,
      image: '/images/drinks.jpg'
    }
  ]
};

export const Menu: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h1>Cardápio</h1>
        
        <MenuSection>
          <h2>Lanches</h2>
          <div className="items-grid">
            {menuItems.burgers.map(item => (
              <MenuItem key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuSection>

        <MenuSection>
          <h2>Porções</h2>
          <div className="items-grid">
            {menuItems.portions.map(item => (
              <MenuItem key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuSection>

        <MenuSection>
          <h2>Maionese</h2>
          <div className="items-grid">
            {menuItems.sauces.map(item => (
              <MenuItem key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {item.serves && <small>{item.serves}</small>}
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuSection>

        <MenuSection>
          <h2>Bebidas</h2>
          <div className="items-grid">
            {menuItems.drinks.map(item => (
              <MenuItem key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>R$ {item.price.toFixed(2)}</span>
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuSection>
      </div>
    </Container>
  );
}; 