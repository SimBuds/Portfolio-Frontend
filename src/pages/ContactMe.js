import React, { useState } from 'react';
import '../assets/ContactMe.css';

function ContactMe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      try {
        const response = await fetch('https://formspree.io/f/mbjezzwv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, message }),
        });
        setLoading(false);
        if (response.ok) {
          alert('Email sent successfully!');
          setEmail('');
          setMessage('');
        } else {
          alert('Failed to send email. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please check your internet connection and try again.');
        setLoading(false);
      }
    };

    return (
      <div className="contact-page">
        <h1>Feel free to reach out!</h1>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit" className="send-button" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Email'}
            </button>
          </form>
        </div>
      </div>
    );
}

export default ContactMe;