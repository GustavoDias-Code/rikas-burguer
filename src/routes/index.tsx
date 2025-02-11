import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { About } from '../pages/About';
import { Stores } from '../pages/Stores';
import { Contact } from '../pages/Contact';
import { Orders } from '../pages/Orders';
import { Admin } from '../pages/Admin';
import { Login } from '../pages/Login';
import { useAuth } from '../contexts/AuthContext';

// Componente para proteger rotas administrativas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Menu />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/lojas" element={<Stores />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/pedidos" element={<Orders />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}; 