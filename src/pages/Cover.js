import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/Cover.css'

const Cover = () => {
  return (
    <Container className="bg-black text-white py-5 cover-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="header mb-4">
            <p>Cover Page</p>
          </div>
          <div className="body mb-4">
            <p>I'm thrilled to share my journey as a Software Developer with you. With a strong passion for programming and a commitment to crafting high-quality code.</p>
            <p>My technical toolkit includes programming languages such as Java, C#, Python, ASP.NET, JavaScript, Rust, and React. This diverse skill will equipped me with the knowledge and experience necessary for my future Software Developer career. I thrive in collaborative environments, contributing to team efforts by developing new features, troubleshooting and debugging issues, and delivering solutions that meet standards.</p>
            <p>Beyond my technical capabilities, I pride myself on being proactive and detail-oriented, always striving to deliver work that exceeds expectations. I'm a constant learner, eager to stay current with the latest technologies and trends to enhance my skills.</p>
            <p>I'm excited to showcase my projects and experiences through this portfolio. It's a collection of school work and hobbies that have interested me so far. Feel free to reach out if you're interested in learning more about my journey or discussing potential collaborations. Thank you for visiting!</p>
        </div>
          <div className="closing mb-4">
            <p>Sincerely, Casey Hsu</p>
            <p>casey.hsu@georgebrown.ca</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cover;