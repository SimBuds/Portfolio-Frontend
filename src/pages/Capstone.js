import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/Capstone.css'

function Capstone() {
  return (
    <Container className="capstone">
      <Row>
        <Col lg={12}>
          <h1 className="text-center">Capstone Project</h1>
        </Col>
        <Col lg={4}>
          <section id="summary">
            <h2>Project Summary</h2>
            <p>Here, you will describe the main goals, technologies, and achievements of your capstone project.</p>
          </section>
        </Col>
        <Col lg={4}>
          <section id="vision">
            <h2>Project Vision</h2>
            {/* Content will go here */}
          </section>
        </Col>
        <Col lg={4}>
          <section id="requirements">
            <h2>Project/Business Requirements</h2>
            {/* Content will go here */}
          </section>
        </Col>
      </Row>
      {/* Add more sections following the same pattern */}
    </Container>
  );
}

export default Capstone;