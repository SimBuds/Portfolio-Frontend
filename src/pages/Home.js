import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection.js';
import TechStack from '../components/TechStack.js';
import AboutMe from '../components/AboutMe.js';
import FeaturedProjects from '../components/FeaturedProjects.js';
import CallToArms from '../components/CallToArms.js';
import '../assets/Home.css';

const Home = () => {
  return (
    <Container fluid className="home-layout">
      <section aria-label="Hero Section">
        <HeroSection />
      </section>
      <section aria-label="Technology Stack">
        <TechStack />
      </section>
      <section aria-label="About Me">
        <AboutMe />
      </section>
      <section aria-label="Featured Projects">
        <FeaturedProjects />
      </section>
      <section aria-label="Call to Action">
        <CallToArms />
      </section>
    </Container>
  );
};

export default Home;
