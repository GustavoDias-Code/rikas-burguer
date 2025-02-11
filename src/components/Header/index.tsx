import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Logo, OrderButton } from './styles';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.5)', 'rgb(0, 0, 0)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container
      as={motion.header}
      style={{ background: headerBackground }}
      className={isScrolled ? 'scrolled' : ''}
    >
      <div className="container">
        <Logo>
          <Link to="/">
            Rikas Burguer
          </Link>
        </Logo>
        
        <Nav>
          <ul>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/lojas">Nossa Loja</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </Nav>

        <OrderButton>
          <Link to="/pedidos">Peça Agora</Link>
        </OrderButton>
      </div>
    </Container>
  );
}; 