import CategoriasContext from "../context/CategoriasProvider";
import { useContext } from "react";

const useCategorias = () => {
  return useContext(CategoriasContext);
};

export default useCategorias;
