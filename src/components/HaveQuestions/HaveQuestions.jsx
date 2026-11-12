import React from 'react';
import './HaveQuestions.css';

export const HaveQuestions = () => {
  return (
    <section className="havequestions-section" id="contact">
      <img
        src="/assets/have-questions-bg.jpg"
        alt="Muslim Arts College admissions advisor speaking with a student"
        className="havequestions-bg-img"
      />
      <div className="havequestions-overlay" aria-hidden="true" />

      <div className="havequestions-content">
        <h2 className="havequestions-title">Have questions?</h2>
        <p className="havequestions-subtitle">
          Our team is here to help. Simply book a call with one of our Admissions Advisors or chat with us via Live Chat to get the answers you need.
        </p>
        <div className="havequestions-actions">
          <a href="#book-call" className="havequestions-btn">
            Book a call
          </a>
          <a href="#live-chat" className="havequestions-btn">
            Live chat
          </a>
        </div>
      </div>
    </section>
  );
};

