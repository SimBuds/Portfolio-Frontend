import React from 'react';
import '../assets/AboutMe.css';
import aboutImage from '../assets/images/about-me-image.jpg';

const AboutMe = () => {
  return (
    <div className="about-section" id="aboutme">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 about-text">
            <h3>Get to know me</h3>
            <p>During the COVID-19 pandemic, I decided to pursue my long-standing passion for computers and programming, 
              transitioning from my nine-year career as a professional chef. My interest in technology began at the age 
              of eight when I built my first computer, and I have been deeply enthusiastic about the field ever since.
            </p>
          </div>
          <div className="col-md-4 about-image">
            <img src={aboutImage} alt="Casey Hsu" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;