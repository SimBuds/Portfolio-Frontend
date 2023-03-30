import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Casey's Portfolio</h1>
        <nav className="header-nav">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/projects">Projects</NavLink>
          <NavLink activeClassName="active" to="/resume">Resume</NavLink>
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;