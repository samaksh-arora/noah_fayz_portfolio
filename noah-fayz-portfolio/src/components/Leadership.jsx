import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const leadership = [
    {
      title: 'Founder / President',
      organization: 'Wayne Stock Trade Association',
      location: 'Detroit, MI',
      period: 'August 2024 – Present',
      description: "Founded Wayne State's first student-led trading club, scaled membership, and led workshops on stock market fundamentals and options trading."
    },
    {
      title: 'Director of Operations',
      organization: 'Financial Management Association',
      location: 'Detroit, MI',
      period: 'December 2024 - Present',
      description: 'Organized events and networking opportunities with industry professionals to create value for student members.'
    },
    {
      title: 'Investment Team Member',
      organization: 'Warrior Ventures',
      location: 'Detroit, MI',
      period: 'December 2024 – Present',
      description: 'Researched pre-seed startups, evaluated pitch decks, and contributed to early-stage investment decisions.'
    },
    {
      title: 'Participant',
      organization: 'ACG Cup Investment Banking Case Competition',
      location: 'Grand Rapids, MI',
      period: 'February 2025',
      description: 'Built a long-term DCF model and delivered a professional pitch deck valuing a mid-market company for industry judges.'
    }
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="container-wide">
        <div className="section-header">
          <h2>Leadership & Involvement</h2>
        </div>

        <div className="leadership-list">
          {leadership.map((item, index) => (
            <article key={index} className="leadership-item">
              <div className="lead-header">
                <h3>{item.title}</h3>
                <span className="period">{item.period}</span>
              </div>
              <h4>{item.organization}</h4>
              <p className="location">{item.location}</p>
              <p className="description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
