import React from 'react';
import './MenuDrawer.css';
import { LeoCussenLogo } from '../Icons';

export const MenuDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`menudrawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`menudrawer-panel ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="menudrawer-header">
          <LeoCussenLogo size={24} />
          <button className="menudrawer-close-btn" onClick={onClose} aria-label="Close menu">
            &times;
          </button>
        </div>

        <div className="menudrawer-body">
          <ul className="menudrawer-nav-list">
            <li>
              <a href="#ug" className="menudrawer-nav-link" onClick={onClose}>
                Undergraduate Programs (UG)
                <span className="menudrawer-highlight-badge">Admissions Open</span>
              </a>
            </li>
            <li>
              <a href="#pg" className="menudrawer-nav-link" onClick={onClose}>
                Postgraduate Programs (PG)
              </a>
            </li>
            <li>
              <a href="#research" className="menudrawer-nav-link" onClick={onClose}>
                Research & Doctoral Studies
              </a>
            </li>
            <li>
              <a href="#choose-muslim-arts" className="menudrawer-nav-link" onClick={onClose}>
                Why Choose Muslim Arts College
              </a>
            </li>
            <li>
              <a href="#faculty" className="menudrawer-nav-link" onClick={onClose}>
                Faculty & Departments
              </a>
            </li>
            <li>
              <a href="#about" className="menudrawer-nav-link" onClick={onClose}>
                About Muslim Arts College
              </a>
            </li>
            <li>
              <a href="#contact" className="menudrawer-nav-link" onClick={onClose}>
                Contact & Campus
              </a>
            </li>
          </ul>

          <div className="menudrawer-contact-box">
            <div className="menudrawer-contact-title">Need guidance?</div>
            <p className="menudrawer-contact-text">
              Connect with our admissions office for details on degree programs, scholarships, and hostel facilities.
            </p>
            <a href="tel:04651248000" className="menudrawer-btn-yellow">
              Contact Admissions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

