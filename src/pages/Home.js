import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection.js';
import TechStack from '../components/TechStack.js';
import FeaturedProjects from '../components/FeaturedProjects.js';
import AboutMe from '../components/AboutMe.js';
import ReachMe from '../components/ReachMe.js';
import PoweredBy from '../components/PoweredBy.js';

import '../assets/Home.css';

const Home = () => {
  return (
    <Container fluid className="home-layout">
      <section aria-label="Hero Section">
        <HeroSection />
      </section>
      <section aria-label="Featured Projects">
        <FeaturedProjects />
      </section>
      <section aria-label="Technology Stack">
        <TechStack />
      </section>
      <section aria-label="About Me">
        <AboutMe />
      </section>
      <section aria-label="Reach Me">
        <ReachMe />
      </section>
      <section aria-label="Powered By">
        <PoweredBy />
      </section>
    </Container>
  );
};

export default Home;
