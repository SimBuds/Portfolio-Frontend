import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
      <Navbar.Brand href="/">Casey's Portfolio</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact activeClassName="active" to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} activeClassName="active" to="/cover">Cover Page</Nav.Link>
        <Nav.Link as={NavLink} activeClassName="active" to="/resume">Resume</Nav.Link>
        <Nav.Link as={NavLink} activeClassName="active" to="/projects">Projects</Nav.Link>
        <Nav.Link as={NavLink} activeClassName="active" to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;