import BebidasContext from "../context/BebidasContext";
import { useContext } from "react";

const useBebidas = () => {
  return useContext(BebidasContext);
};

export default useBebidas;
