import React from 'react';
import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 'ayesha',
    quote:
      'The best thing about studying at Muslim Arts College is the mentorship you build with your professors. They make an effort to support you in every way they can.',
    name: 'Ayesha Fathima',
    role: 'B.Sc. Computer Science graduate',
    initials: 'AF'
  },
  {
    id: 'rahman',
    quote:
      'Muslim Arts College equipped me with the skillset to be adaptable and understand how to apply my academic knowledge in real-world corporate environments.',
    name: 'Mohamed Rahman',
    role: 'B.Com. Corporate Finance graduate',
    initials: 'MR'
  },
  {
    id: 'priya',
    quote:
      'The practical lab sessions and research guidance were fantastic. The supportive campus environment in Thiruvithancode helped me grow both academically and personally.',
    name: 'Priya Dharshini',
    role: 'M.Sc. Mathematics graduate',
    initials: 'PD'
  },
  {
    id: 'karthik',
    quote:
      'Beyond classroom lectures, the placement cell workshops, communication labs, and department symposiums gave me the confidence to succeed from day one.',
    name: 'Karthik Subramanian',
    role: 'B.A. English Literature graduate',
    initials: 'KS'
  },
  {
    id: 'fathima-z',
    quote:
      'Our faculty encouraged curiosity and independent research. The guidance I received during my postgraduate project shaped my path into doctoral studies.',
    name: 'Fathima Zahra',
    role: 'M.Com. graduate',
    initials: 'FZ'
  }
];

export const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-badge">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M0 0H10V10C4.477 10 0 5.523 0 0Z" fill="#61B38D" />
          </svg>
          <span className="testimonials-badge-text">TESTIMONIALS</span>
        </div>

        <div className="testimonials-header">
          <h2 className="testimonials-heading">What our graduates say</h2>
        </div>
      </div>

      {/* Continuous automatic horizontal scrolling track */}
      <div className="testimonials-marquee-viewport">
        <div className="testimonials-marquee-track">
          {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((item, idx) => (
            <article key={`${item.id}-${idx}`} className="testimonial-slide-card">
              <div>
                <div className="testimonial-quote-marks" aria-hidden="true">
                  <svg width="36" height="18" viewBox="0 0 36 18" fill="none">
                    <path d="M0 0H16V16C7.163 16 0 8.837 0 0Z" fill="#61B38D" />
                    <path d="M20 0H36V16C27.163 16 20 8.837 20 0Z" fill="#61B38D" />
                  </svg>
                </div>

                <blockquote className="testimonial-slide-quote">
                  {item.quote}
                </blockquote>
              </div>

              <div className="testimonial-slide-footer">
                <div>
                  <div className="testimonial-slide-name">{item.name}</div>
                  <div className="testimonial-slide-role">{item.role}</div>
                </div>

                <div className="testimonial-slide-avatar" aria-hidden="true">
                  {item.initials}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
