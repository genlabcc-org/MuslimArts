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
              <LeoCussenEmblem size={32} />
              <div>
                <div className="footer-brand-name">Muslim Arts College</div>
                <div className="footer-brand-tagline">Thiruvithancode</div>
              </div>
            </div>
            <p className="footer-desc">
              Inspiring academic excellence, cultivating practical skills and shaping future leaders through quality higher education and research.
            </p>
            <div className="footer-socials">
              <a href="#linkedin" className="footer-social-link" title="LinkedIn">in</a>
              <a href="#facebook" className="footer-social-link" title="Facebook">fb</a>
              <a href="#youtube" className="footer-social-link" title="YouTube">yt</a>
              <a href="#instagram" className="footer-social-link" title="Instagram">ig</a>
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

