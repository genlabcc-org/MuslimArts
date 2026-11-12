import React from 'react';
import './CampusEvents.css';
import { ChooseBadgeIcon } from '../Icons';

const UPCOMING_EVENTS = [
  {
    id: 'admissions-2026',
    day: '18',
    month: 'MAY',
    mode: 'Campus & Online',
    title: 'UG & PG Admissions Open House 2026',
    description: 'Meet department heads, tour our Thiruvithancode campus laboratories, and get one-on-one counselling on scholarships and eligibility.',
    cta: 'Register now'
  },
  {
    id: 'ai-symposium',
    day: '04',
    month: 'JUN',
    mode: 'Main Auditorium',
    title: 'National Symposium on AI & Computational Sciences',
    description: 'Keynote talks, paper presentations, and hands-on workshops bringing together researchers and industry practitioners.',
    cta: 'View schedule'
  },
  {
    id: 'career-drive',
    day: '22',
    month: 'JUN',
    mode: 'Placement Cell',
    title: 'Annual Campus Recruitment & Career Fair',
    description: 'Connecting final-year graduates across Science, Commerce, and Humanities with leading regional and national employers.',
    cta: 'Learn more'
  }
];

export const CampusEvents = () => {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <div className="events-header">
          <div>
            <div className="events-badge">
              <ChooseBadgeIcon size={14} />
              <span className="events-badge-text">UPCOMING EVENTS &amp; INTAKES</span>
            </div>
            <h2 className="events-heading">What&rsquo;s on at Muslim Arts College</h2>
          </div>

          <a href="#news" className="events-all-btn">
            View all events <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="events-grid">
          {UPCOMING_EVENTS.map((ev) => (
            <article key={ev.id} className="event-card">
              <div className="event-card-top">
                <div className="event-date-row">
                  <div className="event-date-box">
                    <span className="event-date-day">{ev.day}</span>
                    <span className="event-date-month">{ev.month}</span>
                  </div>
                  <span className="event-mode-pill">{ev.mode}</span>
                </div>

                <h3 className="event-title">{ev.title}</h3>
                <p className="event-desc">{ev.description}</p>
              </div>

              <a href="#enquire" className="event-cta-link">
                {ev.cta} <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

