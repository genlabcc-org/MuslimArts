import React, { useState } from 'react';
import './Hero.css';

const TABS_DATA = [
  {
    id: 'plt',
    code: 'PLT',
    label: 'Practical Legal Training',
    title: 'PRACTICAL LEGAL TRAINING (PLT)',
    description: 'Gain the practical legal skills, simulated file work, and continuous mentor feedback required to transition confidently from graduate to practicing lawyer.',
    buttonText: 'Explore PLT',
    buttonHref: '#plt',
    image: '/assets/hero-leocussen-full.jpg'
  },
  {
    id: 'cpd',
    code: 'CPD',
    label: 'Continuing Professional Development',
    title: 'CONTINUING PROFESSIONAL DEVELOPMENT',
    description: 'Strengthen your professional capability with practical CPD programs designed and delivered by experienced lawyers, helping you stay current and grow your career.',
    buttonText: 'Learn more',
    buttonHref: '#cpd',
    image: '/assets/hero-cpd-full.jpg'
  },
  {
    id: 'psc',
    code: 'PSC',
    label: 'Professional Short Courses',
    title: 'PROFESSIONAL SHORT COURSES',
    description: 'Targeted, flexible short courses designed to deepen specialized knowledge and accelerate career progression in law.',
    buttonText: 'View courses',
    buttonHref: '#psc',
    image: '/assets/hero-cpd-full.jpg'
  },
  {
    id: 'muslimarts',
    code: 'MUSLIM ARTS',
    label: 'College of Arts & Science',
    title: 'QUALITY EDUCATION FOR EVERY STAGE OF YOUR CAREER',
    description: 'Muslim Arts College offers Undergraduate, Postgraduate and Continuing Education programs that help students and professionals build capability, confidence and knowledge throughout their careers.',
    buttonText: 'About us',
    buttonHref: '#about',
    image: '/assets/hero-leocussen-full.jpg'
  }
];

export const Hero = () => {
  // Default to Tab 2 (CPD - Continuing Professional Development) matching the screenshot
  const [activeTabId, setActiveTabId] = useState('cpd');

  const currentTab = TABS_DATA.find((tab) => tab.id === activeTabId) || TABS_DATA[3];

  return (
    <section className="hero-section" id="top">
      {/* Background photos and overlay */}
      <div className="hero-bg-container">
        {TABS_DATA.map((tab) => (
          <img
            key={tab.id}
            src={tab.image}
            alt={tab.label}
            className={`hero-bg-image ${activeTabId === tab.id ? 'active' : 'inactive'}`}
            loading="eager"
          />
        ))}
        {/* Soft yellow radiant overlay to seamlessly blend content */}
        <div className="hero-gradient-overlay" />
      </div>

      {/* Main hero headline and copy */}
      <div className="hero-content-wrapper">
        <div className="hero-text-block" key={currentTab.id}>
          <h1 className="hero-title">{currentTab.title}</h1>
          <p className="hero-description">{currentTab.description}</p>
          <a href={currentTab.buttonHref} className="hero-cta-btn">
            {currentTab.buttonText}
          </a>
        </div>
      </div>

      {/* Bottom docked tabs matching the images */}
      <div className="hero-tabs-wrapper">
        <nav className="hero-tabs-container" role="tablist" aria-label="Course categories">
          {TABS_DATA.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`hero-tab-card ${isActive ? 'active' : ''} tab-${tab.id}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                <span className="hero-tab-code">{tab.code}</span>
                <span className="hero-tab-label">{tab.label}</span>
                <div className="hero-tab-indicator" />
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

