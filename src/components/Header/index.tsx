import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Logo, OrderButton } from './styles';
import { useMenuMobile } from '../../contexts/MenuMobileContext';

export const Header: React.FC = () => {
  const { isOpen } = useMenuMobile();

  return (
    <Container>
      <div className="container">
        <Logo className={isOpen ? 'hidden' : ''}>
          <Link to="/">
            <img src="/images/logo/logo.png" alt="Rikas Burguer" />
          </Link>
        </Logo>
        
        <Nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/lojas">Nossa Loja</Link></li>
           {/* <li><Link to="/sobre">Sobre</Link></li>*/}
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </Nav>

        <div className="buttons">
          <OrderButton>
            <Link to="/pedidos">Peça Agora</Link>
          </OrderButton>
        </div>
      </div>
    </Container>
  );
}; 