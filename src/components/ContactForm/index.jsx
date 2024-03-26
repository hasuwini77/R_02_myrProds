import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

function ContactForm() {
  return (
    <Container className="d-flex justify-content-center">
      <Form style={{ width: "60%", padding: "10px", marginTop: "17px" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default ContactForm;
