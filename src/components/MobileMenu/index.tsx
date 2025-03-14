import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, MenuButton, MenuOverlay, MenuContent } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMenuMobile } from '../../contexts/MenuMobileContext';

export function MobileMenu() {
  const { isOpen, setIsOpen } = useMenuMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
              onClick={closeMenu}
            />
            <MenuContent
              as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="logo">
                <img src="/images/logo.png" alt="Rika's Burguer" />
              </div>
              <nav>
                <Link to="/" onClick={closeMenu}>
                  Início
                </Link>
                <Link to="/cardapio" onClick={closeMenu}>
                  Cardápio
                </Link>
                <Link to="/lojas" onClick={closeMenu}>
                  Nossa Loja
                </Link>
                {/* <Link to="/sobre" onClick={closeMenu}>
                  Sobre 
                </Link>*/}
                <Link to="/contato" onClick={closeMenu}>
                  Contato
                </Link>
                <Link to="/pedidos" className="order-button" onClick={closeMenu}>
                  Peça Agora
                </Link>
              </nav>
            </MenuContent>
          </>
        )}
      </AnimatePresence>
    </Container>
  );
} 