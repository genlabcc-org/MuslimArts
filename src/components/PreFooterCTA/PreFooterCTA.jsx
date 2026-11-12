import React from 'react';
import './PreFooterCTA.css';

export const PreFooterCTA = () => {
  return (
    <section className="prefooter-section" id="enquire">
      <div className="prefooter-container">
        <div className="prefooter-content">
          <div className="prefooter-badge">ADMISSIONS &amp; ENQUIRIES</div>
          <h2 className="prefooter-title">
            Ready to start your journey at Muslim Arts College?
          </h2>
          <p className="prefooter-subtitle">
            Connect with our admissions team in Thiruvithancode for program guidance, campus visits, and scholarship details.
          </p>
        </div>

        <div className="prefooter-actions">
          <a href="#admissions" className="prefooter-btn-dark">
            Apply for Admission
          </a>
          <a href="#contact" className="prefooter-btn-outline">
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

