import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="justify-content-center">
        <p>© 2024 Casey's Portfolio</p>
      </Container>
    </footer>
  );
};

export default Footer;