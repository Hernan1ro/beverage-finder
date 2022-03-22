import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <header className="py-5">
        <h1>Beverage Finder</h1>
      </header>
      <Container className="mt-5">
        <Formulario />
      </Container>
    </>
  );
}

export default App;
