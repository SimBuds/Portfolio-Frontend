import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Cover = () => {
  return (
    <Container className="py-5">
      <Row className="my-5">
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="display-4">Cover Letter</h1>
          <p>
            Dear Vistor,
          </p>
          <p>
            Sincerely,
            Casey Hsu
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cover;