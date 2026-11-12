import React from 'react';
import './Icons.css';

// Muslim Arts College official crest emblem
export const MuslimArtsEmblem = ({ size = 48, className = '' }) => (
  <img
    src="/assets/mac-logo.jpg"
    alt="Muslim Arts College Crest"
    width={size}
    height={size}
    className={`logo-emblem-img ${className}`}
  />
);

export const LeoCussenEmblem = MuslimArtsEmblem;

// Full Muslim Arts College Logo with text
export const MuslimArtsCollegeLogo = ({ withText = true, size = 48 }) => (
  <div className="logo-container">
    <MuslimArtsEmblem size={size} />
    {withText && (
      <div className="logo-text-group">
        <span className="logo-brand-name">Muslim Arts College</span>
        <span className="logo-sub-text">THIRUVITHANCODE</span>
      </div>
    )}
  </div>
);

export const LeoCussenLogo = MuslimArtsCollegeLogo;

// CHOOSE LEO CUSSEN badge icon
export const ChooseBadgeIcon = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    <path
      d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
      fill="#61B38D"
    />
  </svg>
);

// Card 1: Real world training icon (Inbox/tray with solid yellow bottom)
export const RealWorldTrainingIcon = ({ size = 68 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    {/* Upper handle / lid loop outline */}
    <path
      d="M26 24C26 21.8 27.8 20 30 20H50C52.2 20 54 21.8 54 24V32H26V24Z"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Main tray outer outline with rounded corners */}
    <rect
      x="16"
      y="32"
      width="48"
      height="30"
      rx="6"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bottom filled yellow area */}
    <path
      d="M19 46H61V56C61 58.2 59.2 60 57 60H23C20.8 60 19 58.2 19 56V46Z"
      fill="#61B38D"
    />
    {/* Middle tray dip cutout */}
    <path
      d="M16 46H28C29.6 46 31 47.4 31 49V51C31 52.6 32.4 54 34 54H46C47.6 54 49 52.6 49 51V49C49 47.4 50.4 46 52 46H64"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Card 2: Personalised support icon (Two people, left solid yellow, right outline)
export const PersonalisedSupportIcon = ({ size = 68 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    {/* Left figure: head outline */}
    <circle
      cx="32"
      cy="28"
      r="8.5"
      stroke="#61B38D"
      strokeWidth="2.8"
    />
    {/* Left figure: solid yellow torso */}
    <path
      d="M21 58V53C21 47.5 25.5 43 31 43H33C38.5 43 43 47.5 43 53V58H21Z"
      fill="#61B38D"
    />

    {/* Right figure: taller outline */}
    <circle
      cx="51"
      cy="23"
      r="8.5"
      stroke="#61B38D"
      strokeWidth="2.8"
    />
    <path
      d="M42 43.5C45.2 40.5 49.5 39 54 39C60.5 39 66 44.5 66 51V58H45"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Card 3: Flexible learning icon (screen/monitor with horizontal lines and yellow block)
export const FlexibleLearningIcon = ({ size = 68 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    {/* Screen frame outer */}
    <rect
      x="18"
      y="21"
      width="44"
      height="33"
      rx="7"
      stroke="#61B38D"
      strokeWidth="2.8"
    />
    {/* Horizontal lines on left */}
    <path d="M25 29H38" stroke="#61B38D" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M25 36H36" stroke="#61B38D" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M25 43H34" stroke="#61B38D" strokeWidth="2.4" strokeLinecap="round" />

    {/* Yellow filled rectangle on right inside screen */}
    <rect
      x="42"
      y="27"
      width="14"
      height="21"
      rx="3.5"
      fill="#61B38D"
    />

    {/* Stand / base curve at bottom */}
    <path
      d="M29 54V57C29 58.7 30.3 60 32 60H48C49.7 60 51 58.7 51 57"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Card 4: Professional growth icon (3 ascending steps + yellow star)
export const ProfessionalGrowthIcon = ({ size = 68 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    {/* 3 ascending bar stairs */}
    {/* Step 1: bottom left */}
    <path
      d="M19 59V53C19 51.5 20.2 50.3 21.7 50.3H29.5"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Step 2: middle */}
    <path
      d="M29.5 50.3V40C29.5 38.5 30.7 37.3 32.2 37.3H43.5"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Step 3: top step & right vertical edge down to base */}
    <path
      d="M43.5 37.3V31C43.5 29.5 44.7 28.3 46.2 28.3H56.5C58 28.3 59.2 29.5 59.2 31V59H19"
      stroke="#61B38D"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* 5-pointed star floating over / standing on the top right step */}
    <path
      d="M59 13L61.8 19.3L68.5 20L63.4 24.6L64.9 31.2L59 27.8L53.1 31.2L54.6 24.6L49.5 20L56.2 19.3L59 13Z"
      fill="#61B38D"
    />
  </svg>
);

// Accessibility Icon (human figure with spread arms)
export const AccessibilityNavIcon = ({ size = 20, color = '#042623' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    <circle cx="12" cy="4.5" r="2.2" stroke={color} strokeWidth="1.8" />
    <path
      d="M4.5 9.5H19.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 9.5V15.5L8.5 21M12 15.5L15.5 21"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// User Profile Icon
export const ProfileNavIcon = ({ size = 20, color = '#042623' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    <circle cx="12" cy="7.5" r="4" stroke={color} strokeWidth="1.8" />
    <path
      d="M4.5 20.5C4.5 16.5 7.8 14 12 14C16.2 14 19.5 16.5 19.5 20.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Search Icon
export const SearchNavIcon = ({ size = 19, color = '#042623' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    <circle cx="11" cy="11" r="6.5" stroke={color} strokeWidth="1.8" />
    <path
      d="M16 16L21 21"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Menu (Hamburger) Icon
export const HamburgerMenuIcon = ({ size = 22, color = '#042623' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-svg"
  >
    <path
      d="M3 8.5H21M3 15.5H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

