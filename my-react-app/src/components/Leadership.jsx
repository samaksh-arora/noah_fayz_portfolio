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
        <h2>Leadership & Involvement</h2>
        {leadership.map((item, index) => (
          <article key={index} className="leadership-item">
            <h3>{item.title} · {item.organization}</h3>
            <p className="lead-meta">{item.location} · {item.period}</p>
            <p className="lead-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
