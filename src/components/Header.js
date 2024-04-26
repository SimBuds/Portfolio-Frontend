import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../assets/Header.css';
import favicon from '../assets/images/icon.png'

const Header = () => {

  const getNavLinkClass = (isActive) => {
    return isActive ? 'active' : '';
  };

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
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-icon" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/aboutme" className={({ isActive }) => getNavLinkClass(isActive)}>About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/resume" className={({ isActive }) => getNavLinkClass(isActive)}>Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/projects" className={({ isActive }) => getNavLinkClass(isActive)}>Projects</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;