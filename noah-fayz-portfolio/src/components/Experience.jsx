import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Business Development Intern',
      company: 'General Dynamics Information Technology',
      location: 'Falls Church, VA',
      period: 'June 2024 – August 2024',
      description: [
        'Conducted market research and competitive analysis to identify new business opportunities in the defense sector',
        'Supported proposal development for multi-million dollar government contracts',
        'Analyzed cost structures and pricing strategies for DoD and federal civilian agency pursuits'
      ]
    },
    {
      title: 'Founder',
      company: 'Real Estate Investment (Self-Employed)',
      location: 'Detroit, MI',
      period: 'September 2022 – Present',
      description: [
        'Sourced, analyzed, and acquired residential properties through direct-to-seller marketing campaigns',
        'Negotiated purchase agreements and managed due diligence processes',
        'Oversaw property rehabilitation and disposition to generate returns'
      ]
    },
    {
      title: 'Founder',
      company: 'Amazon FBA E-Commerce Business',
      location: 'Detroit, MI',
      period: 'May 2023 – May 2024',
      description: [
        'Launched and scaled a product line on Amazon using FBA logistics',
        'Managed inventory forecasting, vendor negotiations, and cost analysis',
        'Optimized product listings and advertising to drive sales growth'
      ]
    },
    {
      title: 'Quantitative Trading (Personal Project)',
      company: 'Algorithmic Trading Development',
      location: 'Detroit, MI',
      period: 'January 2024 – Present',
      description: [
        'Developed Python-based algorithmic trading strategies focused on technical indicators',
        'Backtested strategies using historical market data and refined parameters',
        'Applied risk management principles to control drawdowns and optimize position sizing'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p className="location">{exp.location}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="description-list">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
