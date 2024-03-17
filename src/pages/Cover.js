import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/Cover.css'

const Cover = () => {
  return (
    <Container fluid className="bg-black text-white py-5 cover-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="contact-info mb-4">
            <p>casey.hsu@georgebrown.ca</p>
          </div>
          <div className="recipient-info mb-4">
            <p>Human Resources</p>
          </div>
          <div className="salutation mb-4">
            <p>Dear Hiring Manager,</p>
          </div>
          <div className="body mb-4">
            <p>I am writing to express my interest in the Software Developer role, as advertised. As an experienced developer with a passion for programming and a dedication to producing high-quality code, I believe that I would be a valuable addition to your team.</p>
            <p>With my technical background and proficiency in programming languages such as Java, C#, Python, ASP.NET, JavaScript, Rust and React, I have gained extensive knowledge and experience in developing robust, scalable, and maintainable applications. I have experience working in a collaborative team environment, where I have contributed to developing and testing new features, troubleshooting and debugging issues, and delivering solutions within tight deadlines.</p>
            <p>In addition to my technical expertise, I am a proactive and detail-oriented individual who is committed to delivering work of the highest quality. I am experienced in working with different project management methodologies, such as Agile and Waterfall, and have excellent communication and interpersonal skills. As a self-starter, I am always looking for ways to improve my skills and knowledge in order to stay up to date with the latest technologies and trends.</p>
            <p>I am excited about the opportunity to bring my skills and experience to the Software Developer role at your business. Thank you for considering my application. I have attached my resume for your review, and I look forward to the opportunity to further discuss my qualifications with you.</p>
          </div>
          <div className="closing mb-4">
            <p>Sincerely,</p>
            <p>Casey Hsu</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cover;