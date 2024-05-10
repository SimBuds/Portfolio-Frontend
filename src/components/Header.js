import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/Header.css';
import favicon from '../assets/images/icon.png';

const Header = () => {
  const getNavLinkClass = (isActive) => {
    return isActive ? 'active' : '';
  };

  return (
    <div style={{ marginBottom: '70px' }}>
      <Navbar className="navbar fixed-top" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={favicon}
            className="d-inline-block align-top"
            alt="Logo"
          />
          Casey Hsu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-center">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/projects" className={({ isActive }) => getNavLinkClass(isActive)}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/resume.pdf" className={({ isActive }) => getNavLinkClass(isActive)}>Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <HashLink smooth to="/#aboutme" className="nav-link">About Me</HashLink>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto navbar-social">
            <Nav.Item>
              <Nav.Link href="https://twitter.com/caseyhsuble" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/SimBuds" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/casey-hsu-750b39273" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contactme" className="btn btn-outline-light">Let's Chat</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;