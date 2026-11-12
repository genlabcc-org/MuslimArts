import React, { useState, useEffect, useRef } from 'react';
import './InfoBanner.css';

const STATS_DATA = [
  { value: '40+', label: 'Courses' },
  { value: '110+', label: 'Staff' },
  { value: '1500+', label: 'Students' },
  { value: '100%', label: 'Success' }
];

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const DOUBLE_DIGITS = [...DIGITS, ...DIGITS];

const OdometerValue = ({ value, isVisible, rowIndex }) => {
  return (
    <span className="infobanner-stat-number" aria-label={value}>
      {value.split('').map((char, charIdx) => {
        const num = parseInt(char, 10);
        if (Number.isNaN(num)) {
          return (
            <span
              key={charIdx}
              className={`odometer-symbol ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${rowIndex * 180 + charIdx * 110 + 420}ms` }}
            >
              {char}
            </span>
          );
        }

        // Land in the second cycle (10 + num) so even 0 and 1 visibly roll
        const targetStep = 10 + num;
        const delayMs = rowIndex * 180 + charIdx * 110;

        return (
          <span key={charIdx} className="odometer-slot" aria-hidden="true">
            <span className="odometer-sizer">{char}</span>
            <span
              className="odometer-strip"
              style={{
                transform: isVisible ? `translate(-50%, -${targetStep * 5}%)` : 'translate(-50%, 0%)',
                transitionDelay: `${delayMs}ms`
              }}
            >
              {DOUBLE_DIGITS.map((d, dIdx) => (
                <span key={dIdx} className="odometer-digit">
                  {d}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
};

export const InfoBanner = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`infobanner-section ${isVisible ? 'is-visible' : ''}`}
      id="our-difference"
    >
      <div className="infobanner-container">
        <div className="infobanner-layout">
          {/* Left Column: Eyebrow, Heading & Description */}
          <div className="infobanner-left">
            <div className="infobanner-badge">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 0H10V10C4.477 10 0 5.523 0 0Z" fill="#042623" />
              </svg>
              <span>OUR DIFFERENCE</span>
            </div>
            <h2 className="infobanner-title">
              A proven<br />track record
            </h2>
            <p className="infobanner-subtitle">
              More than four decades of academic excellence in Thiruvithancode, supporting generations of students at every stage of their careers.
            </p>
          </div>

          {/* Right Column: Stacked Large Odometer Stats with Dividers */}
          <div className="infobanner-right">
            {STATS_DATA.map((stat, idx) => (
              <div key={stat.label} className="infobanner-stat-row">
                <OdometerValue
                  value={stat.value}
                  isVisible={isVisible}
                  rowIndex={idx}
                />
                <span
                  className="infobanner-stat-label"
                  style={{ transitionDelay: `${idx * 180 + 480}ms` }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
