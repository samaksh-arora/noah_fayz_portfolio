import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        
        <div className="about-text">
          <p>
            I’m an Economics and Entrepreneurship student at the University of Michigan who learns best by building things in the real world. 
            Over the past few years, I’ve started finance organizations, experimented with trading strategies, launched small ventures, 
            and taken on side projects that push me to understand how money, people, and ideas actually move.
          </p>
          <p>
           I’m really interested in the space where finance, technology, and entrepreneurship overlap. I like solving practical problems, working with driven people, and turning half-formed ideas 
           into something that actually works. This site is a place to share what I’m working on, what I’m learning along the way, and to make it easy for people to connect with me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
