import React from 'react';
import './AuthModal.css';

export const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`authmodal-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} role="dialog" aria-modal="true">
      <div className="authmodal-card" onClick={(e) => e.stopPropagation()}>
        <button className="authmodal-close-btn" onClick={onClose} aria-label="Close portal">
          &times;
        </button>

        <span className="authmodal-badge">Student & Faculty Portals</span>
        <h3 className="authmodal-title">Sign in to Muslim Arts College</h3>
        <p className="authmodal-subtitle">
          Select your portal below to access courses, exam results, and college resources.
        </p>

        <div className="authmodal-options">
          <a href="#student-portal" className="authmodal-option-btn">
            <span>Student Academic ERP & LMS</span>
            <span className="authmodal-arrow">&rarr;</span>
          </a>
          <a href="#faculty-portal" className="authmodal-option-btn">
            <span>Faculty & Staff Attendance Portal</span>
            <span className="authmodal-arrow">&rarr;</span>
          </a>
          <a href="#alumni" className="authmodal-option-btn">
            <span>Alumni Network & Career Forum</span>
            <span className="authmodal-arrow">&rarr;</span>
          </a>
          <a href="#admissions-portal" className="authmodal-option-btn">
            <span>Admission Application Portal</span>
            <span className="authmodal-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

