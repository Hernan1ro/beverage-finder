import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [alerta, setAlerta] = useState("");
  const { categorias } = useCategorias();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && (
        <Alert className="text-center" variant="danger">
          {alerta}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Beverage Name</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ex: Tequila"
              name="nombre"
              value={busqueda.nombre}
              onChange={(e) => {
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Beverage Category</Form.Label>
            <Form.Select
              name="categoria"
              id="categoria"
              value={busqueda.categoria}
              onChange={(e) => {
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <option value="">- Select a category</option>
              {categorias.map((categoria) => (
                <option
                  value={categoria.strCategory}
                  key={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            type="submit"
            variant="danger"
            className="text-uppercase w-100"
          >
            Find Beverage
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
