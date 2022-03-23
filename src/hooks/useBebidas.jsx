import BebidasContext from "../context/BebidasProvider";
import { useContext } from "react";

const useBebidas = () => {
  return useContext(BebidasContext);
};

export default useBebidas;
