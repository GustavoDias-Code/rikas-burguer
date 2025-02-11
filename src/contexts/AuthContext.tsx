import React, { createContext, useContext, useState, useCallback } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('@RikasBurguer:token');
    return !!token;
  });

  const login = useCallback(async (username: string, password: string) => {
    // Aqui você pode implementar a chamada real para sua API de autenticação
    // Por enquanto, vamos usar uma autenticação simples
    if (username === 'admin' && password === 'rikas123') {
      localStorage.setItem('@RikasBurguer:token', 'dummy-token');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@RikasBurguer:token');
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}; 