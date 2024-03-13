import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Resume = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <Card.Text>Your education details here</Card.Text>
        </Card.Body>
      </Card>
      {/* Add more Card components for other sections of your resume */}
    </Container>
  );
};

export default Resume;