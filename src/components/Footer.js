import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid style={{backgroundColor: '#f8f9fa', borderTop: '1px solid #e7e7e7', textAlign: 'center', padding: '10px', position: 'fixed', left: '0', bottom: '0', width: '100%'}}>
      <p>© 2024 Casey's Portfolio</p>
    </Container>
  );
};

export default Footer;