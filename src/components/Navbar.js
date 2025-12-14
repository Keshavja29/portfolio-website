import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Keshav</span>
          <span className="logo-dot">.</span>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="home" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="about" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="skills" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link to="projects" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="contact" smooth duration={500} className="nav-link nav-link-cta" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
