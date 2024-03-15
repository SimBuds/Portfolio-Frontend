import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/simbuds/repos')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="overflow-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <h1 className="text-center my-4">Projects</h1>
      <Row>
        {projects.map(project => (
          <Col sm={12} md={6} lg={3} key={project.id}>
            <Card>
              <Card.Img variant="top" src={project.owner.avatar_url} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.html_url} target="_blank">Visit Repo</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;