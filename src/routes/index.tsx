import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { About } from '../pages/About';
import { Stores } from '../pages/Stores';
import { Contact } from '../pages/Contact';
import { Orders } from '../pages/Orders';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Menu />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/lojas" element={<Stores />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/pedidos" element={<Orders />} />
    </Routes>
  );
}; 