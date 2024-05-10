import React from 'react';
import '../assets/AboutMe.css';
import aboutImage from '../assets/images/about-me-image.jpg'; // Assume you have an image

const AboutMe = () => {
  return (
    <div className="about-section" id="aboutme">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 about-text">
            <h2>Get to know me!</h2>
            <p>My name is Casey Hsu and I have been a professional chef for 9 years but decided during Covid to change my passion for programming. I am a future software developer with a passion for creating meaningful and impactful applications. Explore my projects and learn more about my skills and experiences.</p>
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