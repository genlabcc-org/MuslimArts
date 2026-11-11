import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {
  LeoCussenLogo,
  LeoCussenEmblem,
  HamburgerMenuIcon,
  AccessibilityNavIcon,
  ProfileNavIcon,
  SearchNavIcon
} from '../Icons';

export const Navbar = ({ onOpenMenu, onOpenSearch, onOpenAccessibility, onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Menu Hamburger */}
        <div className="navbar-left">
          <button
            className="nav-menu-btn"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
          >
            <HamburgerMenuIcon size={20} />
            <span>Menu</span>
          </button>
        </div>

        {/* Center: Muslim Arts College Logo */}
        <div className="navbar-center">
          <a href="#top" title="Muslim Arts College">
            <LeoCussenLogo withText={!isScrolled || window.innerWidth > 640} size={28} />
          </a>
        </div>

        {/* Right: Accessibility, Profile, Search */}
        <div className="navbar-right">
          <button
            className="nav-action-icon-btn"
            onClick={onOpenAccessibility}
            title="Accessibility Options"
            aria-label="Accessibility settings"
          >
            <AccessibilityNavIcon size={20} />
          </button>

          <button
            className="nav-action-icon-btn"
            onClick={onOpenAuth}
            title="Student & Staff Portal"
            aria-label="User account"
          >
            <ProfileNavIcon size={20} />
          </button>

          <button
            className="nav-search-btn"
            onClick={onOpenSearch}
            aria-label="Search site"
          >
            <SearchNavIcon size={18} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

