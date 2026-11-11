import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { InfoBanner } from './components/InfoBanner/InfoBanner';
import { Footer } from './components/Footer/Footer';
import { MenuDrawer } from './components/MenuDrawer/MenuDrawer';
import { SearchModal } from './components/SearchModal/SearchModal';
import { AuthModal } from './components/AuthModal/AuthModal';
import { AccessibilityModal } from './components/AccessibilityModal/AccessibilityModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAccessOpen, setIsAccessOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  return (
    <div className={`app-root ${isHighContrast ? 'high-contrast' : ''} ${isLargeText ? 'large-text' : ''}`}>
      {/* Top Floating / Sticky Navigation Bar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccessibility={() => setIsAccessOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with interactive Bottom Slider / Tabs */}
        <Hero />

        {/* Features Section: "CHOOSE MUSLIM ARTS COLLEGE" / "A career long advantage" */}
        <Features />

        {/* Info & Stats Banner: signature yellow section */}
        <InfoBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Student & Faculty Portal Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Accessibility Preferences Modal */}
      <AccessibilityModal
        isOpen={isAccessOpen}
        onClose={() => setIsAccessOpen(false)}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
        isLargeText={isLargeText}
        onToggleLargeText={() => setIsLargeText(!isLargeText)}
      />
    </div>
  );
}

export default App;
