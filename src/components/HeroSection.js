import React from 'react';
import '../assets/HeroSection.css'
import heroImage from '../assets/images/hero-image.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section container">
      <div className="row align-items-center">
        <div className="col-md-6 hero-text">
          <h1>Welcome to My Portfolio!</h1>
          <p className="lead">
            My name is Casey Hsu and I have been a professional chef for 9 years but decided during Covid to change my passion for programming.
            I am a future software developer with a passion for creating meaningful and impactful applications.
            Explore my projects and learn more about my skills and experiences.
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