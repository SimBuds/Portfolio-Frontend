import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/CallToArms.css';

const CallToArms = () => {
    return (
      <Container className="call-to-arms">
        <Row className="text-center">
          <Col md={4} className="cta-box">
            <h2>About me</h2>
            <p>Get to know more about my journey and what drives my passion for design and development.</p>
            <Link className="btn btn-outline-light" to="/aboutme">About Me</Link>
          </Col>
          <Col md={4} className="cta-box">
            <h2>View my resume</h2>
            <p>Please go ahead and check my resume for all the technical information that you may need.</p>
            <Link className="btn btn-outline-light" to="/resume">Resume</Link>
          </Col>
          <Col md={4} className="cta-box">
            <h2>Contact me</h2>
            <p>Feel free to reach me via my contact page below!</p>
            <Link className="btn btn-outline-light" to="/contactme">Contact Me</Link>
          </Col>
        </Row>
      </Container>
    );
};

export default CallToArms;