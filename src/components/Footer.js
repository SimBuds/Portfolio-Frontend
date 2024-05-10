import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid className="justify-content-between">
                <div className="footer-socials">
                    <a href="https://twitter.com/caseyhsuble" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://github.com/SimBuds" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/casey-hsu-750b39273" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </a>
                </div>
                <p>Casey Hsu's Portfolio</p>
            </Container>
        </footer>
    );
};

export default Footer;