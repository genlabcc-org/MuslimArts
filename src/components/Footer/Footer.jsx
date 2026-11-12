import React from 'react';
import './Footer.css';
import { LeoCussenEmblem } from '../Icons';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Top 4-column grid */}
        <div className="footer-top-grid">
          {/* Col 1: Brand */}
          <div className="footer-brand-col">
            <div className="footer-logo-brand">
              <LeoCussenEmblem size={56} />
              <div>
                <div className="footer-brand-name">Muslim Arts College</div>
                <div className="footer-brand-tagline">Thiruvithancode</div>
              </div>
            </div>
            <p className="footer-desc">
              Inspiring academic excellence, cultivating practical skills and shaping future leaders through quality higher education and research.
            </p>
            <div className="footer-socials">
              <a href="#linkedin" className="footer-social-link" title="LinkedIn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#instagram" className="footer-social-link" title="Instagram" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#whatsapp" className="footer-social-link" title="WhatsApp" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2m5.79 14.01c-.24.68-1.42 1.3-1.95 1.38-.51.07-1.15.1-1.85-.12-.42-.14-.97-.32-1.68-.63-2.95-1.27-4.88-4.24-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.29.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.59.84 2.04.91 2.19.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.45.54-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.05 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.02.97.3.15.49.22.56.34.08.13.08.73-.16 1.41z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Academics</h4>
            <ul className="footer-links-list">
              <li><a href="#ug">Undergraduate Programs (UG)</a></li>
              <li><a href="#pg">Postgraduate Programs (PG)</a></li>
              <li><a href="#research">Research & Ph.D. Departments</a></li>
              <li><a href="#certificate">Skill Development Courses</a></li>
              <li><a href="#naac">NAAC Accreditation & IQAC</a></li>
              <li><a href="#library">Digital Library & Resources</a></li>
            </ul>
          </div>

          {/* Col 3: Information */}
          <div className="footer-col">
            <h4 className="footer-col-title">About & Students</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Muslim Arts College</a></li>
              <li><a href="#faculty">Faculty & Departments</a></li>
              <li><a href="#admissions">Admissions & Eligibility</a></li>
              <li><a href="#scholarships">Scholarships & Financial Aid</a></li>
              <li><a href="#news">Campus News & Events</a></li>
              <li><a href="#careers">Careers at Muslim Arts College</a></li>
            </ul>
          </div>

          {/* Col 4: Campus */}
          <div className="footer-col">
            <h4 className="footer-col-title">Campus & Affiliation</h4>
            <div className="footer-campus-info">
              <div className="footer-campus-block">
                <strong>Main Campus</strong><br />
                Thiruvithancode, Kanyakumari District<br />
                Tamil Nadu, India – 629 174<br />
                Affiliated to Manonmaniam Sundaranar University
              </div>
              <div className="footer-campus-block">
                <strong>Accreditation</strong><br />
                Re-accredited by NAAC<br />
                Recognized by UGC under 2(f) and 12(B)
              </div>
            </div>
          </div>
        </div>

        {/* Institution Vision */}
        <div className="footer-reconciliation">
          <p>
            Muslim Arts College is committed to delivering transformative higher education, fostering academic distinction, social empowerment, and ethical values across diverse communities.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Muslim Arts College, Thiruvithancode. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#naac-ssr">NAAC SSR Reports</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

