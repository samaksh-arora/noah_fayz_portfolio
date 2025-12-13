import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Portfolio Manager',
      company: 'FAYZ Capital',
      location: 'Detroit, MI',
      period: 'January 2023 - Present',
      achievements: [
        'Built Python trading algorithms using EMA crossovers, RSI, and volatility signals, targeting systematic, data-driven performance.',
        'Backtested 1,200+ strategies and automated order execution and position sizing to optimize risk and reduce manual effort.',
        'Developed predictive models on historical price data to refine entry and exit signals and improve strategy ROI.'
      ]
    },
    {
      title: 'Finance / Business Development Intern',
      company: 'American Rheinmetall',
      location: 'Plymouth, MI',
      period: 'May 2025 - August 2025',
      achievements: [
        'Analyzed thousands of product lines and BOMs for complex defense vehicle systems to uncover cost and savings opportunities.',
        'Supported proposal development and supplier evaluation for multi-million-dollar contracts, improving cost estimation accuracy.',
        'Streamlined cross-functional reporting workflows across multiple teams to enhance data visibility and reduce manual processing.'
      ]
    },
    {
      title: 'Founder / CEO',
      company: 'Buyifi Real Estate Investment',
      location: 'Detroit, MI',
      period: 'December 2023 - January 2025',
      achievements: [
        'Evaluated financials and property valuations to identify high-return opportunities and grow portfolio performance.',
        'Researched 100+ properties, analyzing pricing trends and investment potential for strategic acquisitions.',
        'Led negotiations, due diligence, and compliance across dozens of deals to secure below-market, profitable transactions.'
      ]
    },
    {
      title: 'Founder / CEO',
      company: 'Buyifi Amazon FBA',
      location: 'Detroit, MI',
      period: 'January 2023 - August 2024',
      achievements: [
        'Managed an e-commerce portfolio of multiple SKUs, generating recurring monthly revenue at strong profit margins.',
        'Scaled paid advertising campaigns and optimized listings using A/B testing to increase conversions and search rankings.',
        'Negotiated supplier and freight costs and managed inventory turnover to reduce unit costs and avoid stockouts.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container-wide">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <article key={index} className="experience-item">
            <h3>{exp.title} · {exp.company}</h3>
            <p className="exp-meta">{exp.location} · {exp.period}</p>
            <ul>
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
