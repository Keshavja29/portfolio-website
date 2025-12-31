import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
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
        <div className="nav-logo">KJ</div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="home" 
              smooth 
              duration={500} 
              className="nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth 
              duration={500} 
              className="nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              smooth 
              duration={500} 
              className="nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth 
              duration={500} 
              className="nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth 
              duration={500} 
              className="nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
