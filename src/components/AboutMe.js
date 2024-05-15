import React from 'react';
import '../assets/AboutMe.css';
import aboutImage from '../assets/images/about-me-image.jpg';

const AboutMe = () => {
  return (
    <div className="about-section" id="aboutme">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 about-text">
            <h2>Get to know me.</h2>
            <p>I have been a professional chef for 9 years but decided during Covid I decided to take the 
              opportunity to change industries for my passion in computers and programming. I built my first 
              computer when I was 8 years old and I have been a big fan boy of technology ever since.</p>
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