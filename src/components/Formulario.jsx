import { Button, Form, Row, Col } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";

const Formulario = () => {
  const { categorias } = useCategorias();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Beverage Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ex: Tequila"
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Beverage Category</Form.Label>
            <Form.Select name="category" id="category">
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
          <Button variant="danger" className="text-uppercase w-100">
            Find Beverage
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
