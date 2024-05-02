import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../assets/AnimatedSection.css';

const AnimatedSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const sectionCurrent = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );
  
    if (sectionCurrent) {
      observer.observe(sectionCurrent);
    }
  
    return () => {
      if (sectionCurrent) {
        observer.unobserve(sectionCurrent);
      }
    };
  }, []);

  return (
    <Container className="animated-section" ref={sectionRef}>
      <Row className="align-items-center">
        <Col md={6}>
          <CSSTransition
            in={inView}
            timeout={500}
            classNames="text-section"
            unmountOnExit
          >
            <div>
              <h2>My Projects So Far</h2>
              <p>Take a look at the projects I have been working on. Each one crafted with attention to detail and a passion for creativity.</p>
              <Link className="btn btn-outline-light" to="/projects">See my Projects</Link>
            </div>
          </CSSTransition>
        </Col>
        <Col md={6} className="animation-box slide-in">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default AnimatedSection;