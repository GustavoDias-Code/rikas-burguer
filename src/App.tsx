import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopOnNavigate } from './components/ScrollToTopOnNavigate';
import { Footer } from './components/Footer';
import { AppRoutes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { MenuMobileProvider } from './contexts/MenuMobileContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MenuMobileProvider>
          <GlobalStyles />
          <ScrollToTopOnNavigate />
          <Header />
          <MobileMenu />
          <AppRoutes />
          <Footer />
          <ScrollToTop />
        </MenuMobileProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App; 