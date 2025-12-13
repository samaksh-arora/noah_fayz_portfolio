import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'leadership', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-name">NOAH FAYZ</span>
        </div>
        
        <ul className="navbar-menu">
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <a onClick={() => scrollToSection('education')}>Education</a>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <a onClick={() => scrollToSection('experience')}>Experience</a>
          </li>
          <li className={activeSection === 'leadership' ? 'active' : ''}>
            <a onClick={() => scrollToSection('leadership')}>Leadership</a>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
