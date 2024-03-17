import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="footer">
      <Container fluid className="justify-content-center">
        <Navbar.Text>© 2024 Casey's Portfolio</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;