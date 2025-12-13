import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          Open to internships, analyst roles, and collaborative projects at the intersection of finance, data, and strategy.
        </p>

        <div className="contact-grid">
          <div className="contact-box">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <a href="tel:+13138294496">(313) 829-4496</a>
          </div>

          <div className="contact-box">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:Noahfayz4@gmail.com">Noahfayz4@gmail.com</a>
          </div>

          <div className="contact-box">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/noah-fayz/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/noah-fayz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
