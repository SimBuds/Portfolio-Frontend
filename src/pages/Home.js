import React from 'react';
import HeroSection from '../components/HeroSection.js'
import CallToArms from '../components/CallToArms.js';
import AnimatedSection from '../components/AnimatedSection.js';
import '../assets/Home.css'
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="home-layout">
      <HeroSection />
      <AnimatedSection />
      <CallToArms />
    </Container>
  );
};

export default Home;