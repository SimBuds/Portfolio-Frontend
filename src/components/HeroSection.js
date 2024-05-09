import React from 'react';
import '../assets/HeroSection.css'
import heroImage from '../assets/images/hero-image.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section container">
      <div className="row align-items-center">
        <div className="col-md-6 hero-text">
          <h1>Hi, I'm Casey Hsu</h1>
          <p className="lead">
            A Web Developer building and managing Websites and Web Applications that leads to the success of the overall products.
          </p>
        </div>
        <div className="col-md-6 hero-image">
          <img src={heroImage} alt="hero" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;