import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/ReachMe.css';

const ReachMe = () => {
    return (
        <div className="reach-me">
            <h1>Would you like to work with me?</h1>
            <p>I'd love to learn more. Hit the button below to get in touch!</p>
            <Link to="/contactme" className="reach-me-button">Let's chat</Link>
        </div>
    );
}

export default ReachMe;