import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Resume = () => {
  return (
    <Container className="p-5 bg-black text-white" style={{ minHeight: '100vh' }}>
      <Row className="mb-5">
        <Col>
          <h2>Objective</h2>
          <p>To secure a position as a computer programmer where my strong problem-solving skills, attention to detail, and experience in management can be utilized to create high-quality software applications.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Highlights</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>Proficient in Java, Python, C#, PHP, JavaScript with a strong understanding of programming principles and algorithms.</ListGroup.Item>
            <ListGroup.Item>Strong analytical skills with an ability to quickly identify and troubleshoot issues.</ListGroup.Item>
            <ListGroup.Item>Ability to work well both independently and in a team environment, with excellent communication skills.</ListGroup.Item>
            <ListGroup.Item>Strong at confrontation and handling complex situations.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Technical Skills</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>Programming Languages: C#, Java, Python, and React, HTML, CSS, JavaScript, PHP, SQL.</ListGroup.Item>
            <ListGroup.Item>Databases: Oracle SQL, MYSQL, Microsoft SQL Server</ListGroup.Item>
            <ListGroup.Item>Operating Systems: Linux, Mac, Windows</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Education</h2>
          <p>George Brown College, Toronto, Ontario 2021-2024</p>
          <ListGroup variant="flush">
            <ListGroup.Item>Computer Programming and Analysis Advance Diploma Program</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Awards</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>2022 Dean's Honour List Semester 1 & 2</ListGroup.Item>
            <ListGroup.Item>2023 Dean's Honour List Semester 3 & 4</ListGroup.Item>
            <ListGroup.Item>2024 Dean's Honour List Semester 5</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;