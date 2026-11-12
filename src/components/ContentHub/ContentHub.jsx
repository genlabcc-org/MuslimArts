import React from 'react';
import './ContentHub.css';
import { ChooseBadgeIcon } from '../Icons';

const HUB_ARTICLES = [
  {
    id: 'choose-degree',
    category: 'Admissions Guide',
    readTime: '4 min read',
    title: 'How to choose the right Undergraduate degree for your career goals',
    excerpt: 'Explore our Science, Commerce, and Humanities pathways and discover how practical lab training and skill add-ons boost graduate readiness.',
    featured: true
  },
  {
    id: 'naac-excellence',
    category: 'Campus News',
    readTime: '3 min read',
    title: 'NAAC & IQAC Quality Initiatives driving academic excellence',
    excerpt: 'A closer look at our continuous curriculum upgrades, digital library expansion, and student mentorship frameworks.'
  },
  {
    id: 'research-culture',
    category: 'Research',
    readTime: '5 min read',
    title: 'Inside our university-recognized Research Centres in Thiruvithancode',
    excerpt: 'How faculty and Ph.D. scholars collaborate on interdisciplinary projects and peer-reviewed publications.'
  }
];

export const ContentHub = () => {
  return (
    <section className="hub-section" id="news">
      <div className="hub-container">
        <div className="hub-header">
          <div>
            <div className="hub-badge">
              <ChooseBadgeIcon size={14} />
              <span className="hub-badge-text">CONTENT HUB &amp; INSIGHTS</span>
            </div>
            <h2 className="hub-heading">Guides, campus news &amp; resources</h2>
          </div>
          <a href="#resources" className="hub-view-all">
            Explore Content Hub <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="hub-grid">
          {HUB_ARTICLES.map((article) => (
            <article
              key={article.id}
              className={`hub-card ${article.featured ? 'hub-card-featured' : ''}`}
            >
              <div className="hub-card-meta">
                <span className="hub-category-pill">{article.category}</span>
                <span className="hub-read-time">{article.readTime}</span>
              </div>
              <h3 className="hub-card-title">{article.title}</h3>
              <p className="hub-card-excerpt">{article.excerpt}</p>
              <a href={`#${article.id}`} className="hub-card-link">
                Read article <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

