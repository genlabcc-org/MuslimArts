import React from 'react';
import './InfoBanner.css';

export const InfoBanner = () => {
  return (
    <section className="infobanner-section">
      <div className="infobanner-container">
        <div className="infobanner-header">
          <div className="infobanner-title-group">
            <div className="infobanner-badge">MUSLIM ARTS COLLEGE DIFFERENCE</div>
            <h2 className="infobanner-title">
              Premier institution for higher education, arts & sciences
            </h2>
            <p className="infobanner-subtitle">
              Empowering students through quality academic programs, research excellence, and dedicated faculty mentorship to cultivate the leaders of tomorrow.
            </p>
          </div>

          <div className="infobanner-cta-actions">
            <a href="#enquire" className="infobanner-btn-dark">
              Enquire today
            </a>
            <a href="#courses" className="infobanner-btn-outline">
              Explore course guide
            </a>
          </div>
        </div>

        {/* Key statistics banner */}
        <div className="infobanner-stats-grid">
          <div className="infobanner-stat-item">
            <span className="infobanner-stat-number">50+</span>
            <span className="infobanner-stat-label">Years of excellence in practical law</span>
          </div>
          <div className="infobanner-stat-item">
            <span className="infobanner-stat-number">1:1</span>
            <span className="infobanner-stat-label">Dedicated senior lawyer mentorship</span>
          </div>
          <div className="infobanner-stat-item">
            <span className="infobanner-stat-number">100%</span>
            <span className="infobanner-stat-label">Practical, simulation-based learning</span>
          </div>
          <div className="infobanner-stat-item">
            <span className="infobanner-stat-number">95%+</span>
            <span className="infobanner-stat-label">Graduate admission success rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

