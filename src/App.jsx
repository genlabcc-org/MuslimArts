import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { InfoBanner } from './components/InfoBanner/InfoBanner';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Newsletter } from './components/Newsletter/Newsletter';
import { HaveQuestions } from './components/HaveQuestions/HaveQuestions';
import { Footer } from './components/Footer/Footer';
import { MenuDrawer } from './components/MenuDrawer/MenuDrawer';
import { SearchModal } from './components/SearchModal/SearchModal';
import { AuthModal } from './components/AuthModal/AuthModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuth5Open, setIsAuthOpen] = useState(false);

  return (
    <div className="app-root">
      {/* Top Floating / Sticky Navigation Bar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with interactive Bottom Slider / Tabs */}
        <Hero />

        {/* Features Section: "CHOOSE MUSLIM ARTS COLLEGE" / "A career long advantage" */}
        <Features />

        {/* Info & Stats Banner: Our Difference */}
        <InfoBanner />

        {/* Student & Alumni Testimonials */}
        <Testimonials />

        {/* Newsletter / Stay Connected */}
        <Newsletter />

        {/* Have Questions Full-Bleed Banner */}
        <HaveQuestions />
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
    </div>
  );
}

export default App;
  