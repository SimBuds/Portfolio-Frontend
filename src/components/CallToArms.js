import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/CallToArms.css';

const CallToArms = () => {
    return (
      <Container className="call-to-arms">
        <Row className="text-center">
          <Col md={4} className="cta-box">
            <h2>Meet the Mind Behind the Work</h2>
            <p>Get to know more about my journey, skills, and what drives my passion for design and development.</p>
            <Link className="btn btn-outline-light" to="/cover">About Me</Link>
          </Col>
          <Col md={4} className="cta-box">
            <h2>See the Experience Behind the Mind</h2>
            <p>Please go ahead and check my resume for all the technical information that you may need.</p>
            <Link className="btn btn-outline-light" to="/contact">Resume</Link>
          </Col>
          <Col md={4} className="cta-box">
            <h2>Discover My Experience</h2>
            <p>Dive into a selection of my latest jobs and explore the skills I've accquired so far.</p>
            <Link className="btn btn-outline-light" to="/experience">Experience</Link>
          </Col>
        </Row>
      </Container>
    );
};

export default CallToArms;