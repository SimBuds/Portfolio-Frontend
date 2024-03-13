import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button variant="primary" as={Link} to={`/projects/${project.id}`}>
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;