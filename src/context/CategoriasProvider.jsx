import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const url =
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

        const {
          data: { drinks },
        } = await axios(url);
        setCategorias(drinks);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
