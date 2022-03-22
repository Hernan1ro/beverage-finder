import { Button, Form, Row, Col } from "react-bootstrap";

const Formulario = () => {
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
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
