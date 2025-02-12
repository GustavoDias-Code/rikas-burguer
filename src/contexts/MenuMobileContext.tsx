import React, { createContext, useContext, useState } from 'react';

interface MenuMobileContextData {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const MenuMobileContext = createContext<MenuMobileContextData>({} as MenuMobileContextData);

export function MenuMobileProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuMobileContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuMobileContext.Provider>
  );
}

export function useMenuMobile() {
  const context = useContext(MenuMobileContext);

  if (!context) {
    throw new Error('useMenuMobile must be used within a MenuMobileProvider');
  }

  return context;
} 