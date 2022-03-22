import { useState, useEffect, createContext } from "react";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  return (
    <CategoriasContext.Provider value={{}}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
