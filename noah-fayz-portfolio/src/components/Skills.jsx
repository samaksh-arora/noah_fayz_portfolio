import React from 'react';
import './Skills.css';

const Skills = () => {
  const technical = [
    'Financial modeling (DCF, LBO)',
    'Python for trading and data analysis',
    'Microsoft Excel, PowerPoint, Word',
    'Digital marketing, SEO, Google Ads',
    'Canva and presentation design'
  ];

  const strengths = [
    'Quantitative and analytical thinking',
    'Entrepreneurship and business building',
    'Deal evaluation and negotiation',
    'Cross-functional collaboration and leadership',
    'Public speaking and workshop facilitation'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul>
              {technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <h3>Core Strengths</h3>
            <ul>
              {strengths.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
