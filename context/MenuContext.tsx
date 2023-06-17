"use client";
import { createContext, useState } from "react";

export const MenuContext = createContext({ open: false, toggle: () => {} });

const MenuContextProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
