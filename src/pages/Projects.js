import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>Description of Project 1</Card.Text>
          <Button variant="primary" href="https://github.com/yourusername/project1">Go to Project</Button>
        </Card.Body>
      </Card>
      {/* Add more Card components for other projects */}
    </Container>
  );
};

export default Projects;