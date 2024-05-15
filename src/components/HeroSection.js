import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image.jpg';
import '../assets/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section container">
      <div className="row align-items-center">
        <div className="col-md-6 hero-text">
          <h1>Hi, I'm Casey Hsu</h1>
          <p className="lead">
            A Web Developer building and managing Websites and Web Applications that leads to the success of the overall products.
          </p>
          <Link to="/project" className="btn btn-outline-light">Visit My Projects</Link>
        </div>
        <div className="col-md-6 hero-image">
          <img src={heroImage} alt="Casey Hsu" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;