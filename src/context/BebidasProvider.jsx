import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

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
    <BebidasContext.Provider value={{}}>{children}</BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default CategoriasContext;
