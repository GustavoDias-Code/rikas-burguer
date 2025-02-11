import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, MenuButton, MenuOverlay, MenuContent } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <AnimatePresence>
        {isOpen && (
          <>
            <MenuOverlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <MenuContent
              as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <nav>
                <Link to="/" onClick={toggleMenu}>Início</Link>
                <Link to="/cardapio" onClick={toggleMenu}>Cardápio</Link>
                <Link to="/lojas" onClick={toggleMenu}>Nossa Loja</Link>
                <Link to="/sobre" onClick={toggleMenu}>Sobre</Link>
                <Link to="/contato" onClick={toggleMenu}>Contato</Link>
                <Link to="/pedidos" onClick={toggleMenu} className="order-button">
                  Peça Agora
                </Link>
              </nav>
            </MenuContent>
          </>
        )}
      </AnimatePresence>
    </Container>
  );
}; 