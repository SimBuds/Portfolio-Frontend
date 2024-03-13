import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="py-5">
      <Row className="my-5">
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead">
            I am a software developer with a passion for creating meaningful and impactful applications.
            Explore my projects and learn more about my skills and experiences.
          </p>
        </Col>
      </Row>
      {/* Additional content or components can be added here */}
    </Container>
  );
};

export default Home;