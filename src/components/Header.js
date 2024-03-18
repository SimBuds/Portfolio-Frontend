import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../assets/Header.css';
import favicon from '../assets/images/icon.png'

const Header = () => {
  return (
    <Navbar className="navbar" expand="lg">
    <Navbar.Brand href="/">
      <img
        src={favicon}
        className="d-inline-block align-top"
        alt="Logo"
      />
      Casey's Portfolio
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav className="mr-auto">
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" to="/cover">Cover Page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" to="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" to="/experience">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" to="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" to="/capstone">Capstone</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;