import React, { useState } from 'react';
import { Container, MenuSection, MenuItem, CategoryNav, Modal } from './styles';

const menuItems = {
  burgers: [
    {
      id: 1,
      name: 'Americano',
      description: 'Pão, ovo frito, queijo derretido, maionese, alface e tomate.',
      price: 19.99,
      image: '/images/burgers/classic-burger.jpeg'
    },
    {
      id: 5,
      name: 'Cheese Burguer',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido e maionese especial.',
      price: 19.99,
      image: '/images/burgers/cheese-burguer.jpeg'
    },
    {
      id: 6,
      name: 'Cheese Egg',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido, ovo frito, maionese especial.',
      price: 21.99,
      image: '/images/burgers/cheese-egg.jpeg'
    },
    {
      id: 7,
      name: 'Cheese Salada',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido, alface, tomate e maionese especial.',
      price: 21.99,
      image: '/images/burgers/cheese-salada.jpeg'
    },
    {
      id: 11,
      name: "Frango com Catupiry",
      description: 'Pão, filé de peito de frango, Catupiry e maionese especial',
      price: 22.99,
      image: '/images/burgers/frango-catupiry.jpeg'
    },
    {
      id: 12,
      name: "Cheese Egg Salada",
      description: 'Pão, hambúrguer artesanal 120gr, queijo derretido, maionese artesanal, ovo frito, alface e tomate.',
      price: 22.99,
      image: '/images/burgers/cheese-egg-salada.jpeg'
    },
    {
      id: 4,
      name: 'Cheese Bacon',
      description: 'Pão, hambúrguer artesanal 120g, queijo derretido, maionese especial e bacon.',
      price: 23.99,
      image: '/images/burgers/cheese-bacon.jpeg'
    },
    {
      id: 16,
      name: "Cheese Salada Bacon",
      description: 'Pão, hambúrguer artesanal 120gr, queijo derretido, maionese artesanal, tiras de bacon frito, alface e tomate.',
      price: 24.99,
      image: '/images/burgers/cheese-salada-bacon.jpeg'
    },
    {
      id: 13,
      name: "Cheese Calabresa",
      description: 'Pão, calabresa fatiada frita, queijo derretido, cebola frita no shoyo, maionese artesanal, alface e tomate.',
      price: 25.99,
      image: '/images/burgers/cheese-calabresa.jpeg'
    },
    {
      id: 14,
      name: "Frango Tudo",
      description: 'Pão, suculento filé de frango frito, queijo derretido, ovo frito, tiras de bacon frito, maionese artesanal, alface e tomate.',
      price: 25.99,
      image: '/images/burgers/frango-tudo.jpeg'
    },
    {
      id: 3,
      name: 'Cheddar Bacon',
      description: 'Pão, hambúrguer artesanal 120g, cheddar, cebola frita no shoyo, bacon em tiras e maionese.',
      price: 26.99,
      image: '/images/burgers/cheddar-bacon.jpeg'
    },
    {
      id: 15,
      name: "Cheese Tudo",
      description: 'Pão, hambúrguer artesanal 120gr, queijo derretido, ovo frito, tiras de bacon frito, maionese artesanal, alface e tomate.',
      price: 26.99,
      image: '/images/burgers/cheese-tudo.jpeg'
    },
    {
      id: 10,
      name: "Rika's Churrasco",
      description: 'Pão, contra filé, queijo derretido, maionese especial, alface e tomate.',
      price: 27.99,
      image: '/images/burgers/rikas-churrasco.jpeg'
    },
    {
      id: 2,
      name: 'Big Cheese Tudo',
      description: 'Pão, dois hambúrguers artesanal 120g cada, queijo derretido, maionese especial, dobro de bacon, 2 ovos fritos, alface e tomate.',
      price: 32.99,
      image: '/images/burgers/big-cheese.jpeg'
    },
    {
      id: 8,
      name: "Rika's Especial",
      description: 'Pão, contra filé em tiras, queijo derretido, queijo gorgonzola, bacon, cebola no shoyo, maionese especial, alface e tomate.',
      price: 32.99,
      image: '/images/burgers/rikas-especial.jpeg'
    },
    {
      id: 9,
      name: "Rika's Vegetariano",
      description: 'Pão de hambúrguer, hambúrguer vegetariano (5 opções: brócolis com mandioca, ervilha, lentilha, mexicano e grão de bico com batata doce), maionese, alface e tomate.',
      price: 32.99,
      image: '/images/burgers/classic-burger.jpeg'
    }
  ],
  portions: [
    {
      id: 22,
      name: 'Anéis de Cebola',
      description: 'Porção de crocantes anéis de cebola (250g).',
      price: 18.99,
      image: '/images/portions/onion-rings.jpeg'
    },
    {
      id: 21,
      name: 'Batata frita',
      description: 'Porção de batatas fritas crocantes.',
      price: 27.99,
      image: '/images/portions/fries.jpeg'
    },
    {
      id: 18,
      name: 'Fritas com bacon e cheddar',
      description: 'Batatas fritas crocantes com bacon e cheddar.',
      price: 35.99,
      image: '/images/portions/fritas-cheddar-bacon.jpeg'
    },
    {
      id: 17,
      name: 'Frango com bacon e Catupiry',
      description: 'Deliciosa porção de frango com bacon e Catupiry.',
      price: 39.99,
      image: '/images/portions/fries.jpeg'
    },
    {
      id: 19,
      name: 'Calabresa acebolada',
      description: 'Porção de calabresa acebolada.',
      price: 39.99,
      image: '/images/portions/fries.jpeg'
    },
    {
      id: 20,
      name: 'Contra filé na chapa com cebola',
      description: 'Suculento contra filé na chapa com cebola.',
      price: 52.99,
      image: '/images/portions/fries.jpeg'
    }
  ],
  sauces: [
    {
      id: 23,
      name: 'Maionese Temperada',
      description: 'Maionese da casa temperada com salsinha e cebolinha, pote com 50ml.',
      price: 3.99,
      image: '/images/portions/fries.jpeg',
      serves: 'Serve 1 pessoa'
    },
    {
      id: 24,
      name: 'Maionese Tradicional',
      description: 'Maionese da casa pote com 50ml.',
      price: 3.99,
      image: '/images/portions/fries.jpeg',
      serves: 'Serve 1 pessoa'
    }
  ],
  drinks: [
    {
      id: 27,
      name: 'Água Mineral',
      description: '510ml',
      price: 3.00,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 26,
      name: 'Água com Gás',
      description: '510ml',
      price: 3.50,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 24,
      name: 'Schweppes Tônica',
      description: '350ml',
      price: 5.00,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 20,
      name: 'Coca-Cola',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 21,
      name: 'Fanta Laranja',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 22,
      name: 'Fanta Uva',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 25,
      name: 'Sprite',
      description: '350ml',
      price: 6.90,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 19,
      name: 'Brahma Duplo Malte',
      description: '350ml',
      price: 8.00,
      image: '/images/drinks/soda.jpg'
    },
    {
      id: 23,
      name: 'Schweppes Citrus',
      description: '350ml',
      price: 7.90,
      image: '/images/drinks/soda.jpg'
    }
  ]
};

type Category = 'burgers' | 'hotdogs' | 'portions' | 'desserts' | 'extras' | 'drinks';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('burgers');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'burgers', label: 'BURGERS' },
    { id: 'hotdogs', label: 'HOT DOGS' },
    { id: 'portions', label: 'PORÇÕES' },
    { id: 'desserts', label: 'SOBREMESAS' },
    { id: 'extras', label: 'EXTRAS' },
    { id: 'drinks', label: 'BEBIDAS' }
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const renderCategoryItems = () => {
    switch (activeCategory) {
      case 'burgers':
        return menuItems.burgers.map(item => (
          <MenuItem key={item.id} onClick={() => handleImageClick(item.image)}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>R$ {item.price.toFixed(2)}</span>
            </div>
          </MenuItem>
        ));
      case 'portions':
        return menuItems.portions.map(item => (
          <MenuItem key={item.id} onClick={() => handleImageClick(item.image)}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>R$ {item.price.toFixed(2)}</span>
            </div>
          </MenuItem>
        ));
      case 'drinks':
        return menuItems.drinks.map(item => (
          <MenuItem key={item.id} onClick={() => handleImageClick(item.image)}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>R$ {item.price.toFixed(2)}</span>
            </div>
          </MenuItem>
        ));
      default:
        return <p>Em breve!</p>;
    }
  };

  return (
    <Container>
      <div className="container">
        <h1>CARDÁPIO</h1>
        
        <CategoryNav>
          {categories.map(category => (
            <button
              key={category.id}
              className={activeCategory === category.id ? 'active' : ''}
              onClick={() => setActiveCategory(category.id as Category)}
            >
              {category.label}
            </button>
          ))}
        </CategoryNav>

        <MenuSection>
          <div className="items-grid">
            {renderCategoryItems()}
          </div>
        </MenuSection>

        {selectedImage && (
          <Modal onClick={handleCloseModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <img src={selectedImage} alt="Imagem ampliada" />
              <button className="close-button" onClick={handleCloseModal}>
                ×
              </button>
            </div>
          </Modal>
        )}
      </div>
    </Container>
  );
}; 