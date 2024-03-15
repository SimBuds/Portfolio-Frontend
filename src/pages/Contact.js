import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center text-white" style={{ minHeight: '80vh' }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="p-4 rounded" style={{ backgroundColor: '#333', border: '2px solid #444' }}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="bg-dark text-white" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} className="bg-dark text-white" />
            </Form.Group>

            <Button variant="light" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;