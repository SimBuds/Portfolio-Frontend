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
    <Container className="p-5 bg-black text-white">
      <h1 className="text-center my-4">Projects</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-center">
        {projects.map(project => (
          <Col key={project.id} lg={3} md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow bg-white text-black" style={{ padding: '0.5rem' }}>
              <Card.Img variant="top" src={project.owner.avatar_url} style={{ maxHeight: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  {project.description || 'No description available.'}
                </Card.Text>
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
