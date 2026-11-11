import React, { useState, useEffect, useRef } from 'react';
import './SearchModal.css';
import { SearchNavIcon } from '../Icons';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const popularSearches = [
    'Practical Legal Training dates',
    'CPD points ethics',
    'Adelaide PLT onsite',
    'Online legal short courses',
    'Advocacy masterclass',
    'Admission to practice requirements'
  ];

  return (
    <div
      className={`searchmodal-backdrop ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="searchmodal-card" onClick={(e) => e.stopPropagation()}>
        <div className="searchmodal-input-row">
          <SearchNavIcon size={22} color="#888888" />
          <input
            ref={inputRef}
            type="text"
            className="searchmodal-input"
            placeholder="Search courses, CPD modules, mentors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="searchmodal-close" onClick={onClose} aria-label="Close search">
            &times;
          </button>
        </div>

        <div className="searchmodal-suggestions">
          <div className="searchmodal-label">Popular Searches</div>
          <div className="searchmodal-tags">
            {popularSearches.map((term, index) => (
              <button
                key={index}
                className="searchmodal-tag-chip"
                onClick={() => setQuery(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

