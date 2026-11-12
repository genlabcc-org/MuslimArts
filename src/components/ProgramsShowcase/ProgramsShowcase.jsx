import React, { useState } from 'react';
import './ProgramsShowcase.css';
import { ChooseBadgeIcon } from '../Icons';

const PROGRAM_CATEGORIES = ['All Programs', 'Undergraduate', 'Postgraduate', 'Research', 'Skill Courses'];

const PROGRAMS_LIST = [
  {
    id: 'bsc-cs',
    category: 'Undergraduate',
    tag: 'UG • 3 Years',
    title: 'B.Sc. Computer Science & AI',
    description: 'Build strong foundations in algorithms, full-stack engineering, data structures, and applied machine learning with modern lab sessions.',
    meta: 'Affiliated to MS University'
  },
  {
    id: 'bcom',
    category: 'Undergraduate',
    tag: 'UG • 3 Years',
    title: 'B.Com. Corporate & Finance',
    description: 'Master financial accounting, taxation, corporate law, and business analytics tailored for modern banking and commerce careers.',
    meta: 'CA / CMA Foundation Support'
  },
  {
    id: 'ba-english',
    category: 'Undergraduate',
    tag: 'UG • 3 Years',
    title: 'B.A. English Literature',
    description: 'Explore classical and contemporary literature, linguistics, creative writing, and communication skills for media and academia.',
    meta: 'Language Lab Included'
  },
  {
    id: 'msc-math',
    category: 'Postgraduate',
    tag: 'PG • 2 Years',
    title: 'M.Sc. Mathematics',
    description: 'Advance into pure and applied mathematics, statistical modeling, and computational research guided by experienced faculty.',
    meta: 'NET / SET Coaching'
  },
  {
    id: 'phd-research',
    category: 'Research',
    tag: 'Ph.D. • Full / Part Time',
    title: 'Doctoral Research Programs',
    description: 'Conduct original, peer-reviewed research across Arts, Science, and Commerce disciplines in recognized university research centres.',
    meta: 'UGC & MS University Recognized'
  },
  {
    id: 'skill-cert',
    category: 'Skill Courses',
    tag: 'Certificate • 6 Months',
    title: 'Career & Digital Skill Diplomas',
    description: 'Industry-aligned add-on certifications in Python, Tally Prime, Digital Marketing, and Communicative English alongside your degree.',
    meta: 'Placement Cell Integrated'
  }
];

export const ProgramsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All Programs');

  const filteredPrograms = activeCategory === 'All Programs'
    ? PROGRAMS_LIST
    : PROGRAMS_LIST.filter((p) => p.category === activeCategory);

  return (
    <section className="programs-section" id="courses">
      <div className="programs-container">
        <div className="programs-header">
          <div>
            <div className="programs-badge">
              <ChooseBadgeIcon size={14} />
              <span className="programs-badge-text">ACADEMIC PROGRAMS</span>
            </div>
            <h2 className="programs-heading">
              Courses designed for every stage of your journey
            </h2>
          </div>

          <div className="programs-filter-bar" role="tablist" aria-label="Program categories">
            {PROGRAM_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`programs-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="programs-grid">
          {filteredPrograms.map((program) => (
            <article key={program.id} className="program-card">
              <div className="program-card-top">
                <span className="program-tag">{program.tag}</span>
                <h3 className="program-card-title">{program.title}</h3>
                <p className="program-card-desc">{program.description}</p>
              </div>
              <div className="program-card-footer">
                <span className="program-meta">{program.meta}</span>
                <a href="#enquire" className="program-link">
                  Explore <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

