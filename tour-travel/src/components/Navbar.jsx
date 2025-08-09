// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className="navbar"
      style={{
        backgroundColor: isScrolled ? 'rgba(37, 99, 235, 0.95)' : '#2563eb',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <h1 className="logo">🌄 Negi Tour & Travels</h1>
      
      {/* Desktop Menu */}
      <div className="desktop-links">
        <a href="#cabs" onClick={(e) => { e.preventDefault(); scrollToSection('cabs'); }}>
          🚖 Cabs
        </a>
        <a href="#rentals" onClick={(e) => { e.preventDefault(); scrollToSection('rentals'); }}>
          🏍️ Rentals
        </a>
        <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
          📸 Gallery
        </a>
        <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>
          ⭐ Reviews
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
          📞 Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="mobile-menu-button"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#cabs" onClick={(e) => { e.preventDefault(); scrollToSection('cabs'); }} className="mobile-link">
            🚖 Cabs
          </a>
          <a href="#rentals" onClick={(e) => { e.preventDefault(); scrollToSection('rentals'); }} className="mobile-link">
            🏍️ Rentals
          </a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="mobile-link">
            📸 Gallery
          </a>
          <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }} className="mobile-link">
            ⭐ Reviews
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="mobile-link">
            📞 Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
