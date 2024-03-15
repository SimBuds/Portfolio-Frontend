import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container fluid className="justify-content-center">
        <Navbar.Text>© 2024 Casey's Portfolio</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;