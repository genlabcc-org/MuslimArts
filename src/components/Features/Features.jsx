import React from 'react';
import './Features.css';
import {
  ChooseBadgeIcon,
  RealWorldTrainingIcon,
  PersonalisedSupportIcon,
  FlexibleLearningIcon,
  ProfessionalGrowthIcon
} from '../Icons';

const FEATURES_DATA = [
  {
    id: 'real-world',
    title: 'Real world training',
    description: 'Build practical skills through real legal scenarios, that reflect the realities of modern legal practice.',
    Icon: RealWorldTrainingIcon
  },
  {
    id: 'personalised',
    title: 'Personalised support',
    description: 'Receive guidance and practical insight from experienced lawyers throughout your career.',
    Icon: PersonalisedSupportIcon
  },
  {
    id: 'flexible',
    title: 'Flexible learning',
    description: 'Develop capability through flexible learning designed to fit around modern work and life commitments.',
    Icon: FlexibleLearningIcon
  },
  {
    id: 'growth',
    title: 'Professional growth',
    description: 'Develop practical knowledge and capability that supports your professional growth throughout your legal career.',
    Icon: ProfessionalGrowthIcon
  }
];

export const Features = () => {
  return (
    <section className="features-section" id="choose-muslim-arts">
      <div className="features-container">
        {/* Badge */}
        <div className="features-badge">
          <ChooseBadgeIcon size={14} />
          <span className="features-badge-text">CHOOSE MUSLIM ARTS COLLEGE</span>
        </div>

        {/* Main Heading */}
        <h2 className="features-heading">A career long advantage</h2>

        {/* 4 Feature Cards */}
        <div className="features-grid">
          {FEATURES_DATA.map((item) => {
            const IconComponent = item.Icon;
            return (
              <div key={item.id} className="feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent size={68} />
                </div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

