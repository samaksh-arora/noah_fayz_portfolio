import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Noah Fayz</h3>
            <p>Finance & Economics | University of Michigan</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/noah-fayz/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:Noahfayz4@gmail.com">
                Email
              </a>
              <a href="/Noah-Fayz-Resume.pdf" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Noah Fayz. All rights reserved.</p>
          <button onClick={scrollToTop} className="scroll-top">
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
