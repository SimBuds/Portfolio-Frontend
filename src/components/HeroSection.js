import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/HeroSection.css'
import heroImage from '../assets/images/hero-image.jpg';

const HeroSection = () => {
  return (
    <Container className="hero-section">
      <Row className="align-items-center">
        <Col md={6} className="hero-text">
          <h1>Welcome to My Portfolio!</h1>
          <p className="lead">
            My name is Casey Hsu and I have been a professional chef for 9 years but decided during Covid to chance my passion for programming.
            I am a future software developer with a passion for creating meaningful and impactful applications.
            Explore my projects and learn more about my skills and experiences.
          </p>
        </Col>
        <Col md={6} className="hero-image">
          <img src={heroImage} alt="hero" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;