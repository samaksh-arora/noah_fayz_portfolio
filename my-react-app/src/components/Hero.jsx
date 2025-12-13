import React from 'react';
import './Hero.css';
import headshot from '../assets/headshot.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">NOAH FAYZ</h1>
          <h2 className="hero-title">Finance, Investing & Data-Driven Strategy</h2>
          <p className="hero-description">
            Aspiring finance and economics professional with hands-on experience in portfolio management, 
            real estate investing, financial modeling, and early-stage venture analysis.
          </p>
          <div className="hero-buttons">
            <a href="/Noah-Fayz-Resume.pdf" target="_blank" className="btn btn-primary">
              View Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
          <div className="hero-contact">
            <span>(313) 829-4496 · </span>
            <a href="mailto:Noahfayz4@gmail.com">Noahfayz4@gmail.com</a>
            <span> · </span>
            <a href="https://www.linkedin.com/in/noah-fayz/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={headshot} alt="Noah Fayz" className="headshot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
