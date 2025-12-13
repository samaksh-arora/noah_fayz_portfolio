import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      school: 'University of Michigan',
      location: 'Ann Arbor, Michigan',
      degree: 'Bachelor of Arts, Dual Major: Mathematics of Finance and Risk Management & Economics',
      period: 'January 2026 – May 2028 (Expected)',
      details: []
    },
    {
      school: 'Wayne State University',
      location: 'Detroit, Michigan',
      degree: 'Majors: Finance; Technology & Information Systems, Analytics · Minor: Entrepreneurship and Innovation',
      period: 'August 2024 – December 2025',
      details: [
        'Involvement: Economic Club, Sales Innovators Association, Investment Club, Middle Eastern & South Asian Business Club, Warrior Consulting Group, Alpha Kappa Psi, Wayne Stock Trade Association, Warrior Ventures, Financial Management Association, Warriors in Accounting and Business, Ski and Snowboard Club.',
        'SEO Career Edge Participant.'
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.school}</h3>
            <p className="location">{edu.location}</p>
            <p className="degree">{edu.degree}</p>
            <p className="period">{edu.period}</p>
            {edu.details.map((detail, idx) => (
              <p key={idx} className="detail">{detail}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
