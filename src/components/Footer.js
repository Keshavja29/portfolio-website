import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Keshav<span>.</span></h3>
          <p>Full Stack Developer & Data Analytics Enthusiast</p>
          <div className="footer-social">
            <a href="https://github.com/Keshavja29" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/keshavjat" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:keshavja29@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="home" smooth duration={500}>Home</Link></li>
            <li><Link to="about" smooth duration={500}>About</Link></li>
            <li><Link to="skills" smooth duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth duration={500}>Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Projects</h4>
          <ul className="footer-links">
            <li><a href="https://github.com/Keshavja29/weather-dashboard-react" target="_blank" rel="noopener noreferrer">Weather Dashboard</a></li>
            <li><a href="https://github.com/Keshavja29/task-management-system" target="_blank" rel="noopener noreferrer">Task Management</a></li>
            <li><a href="https://github.com/Keshavja29/expense-tracker-mern" target="_blank" rel="noopener noreferrer">Expense Tracker</a></li>
            <li><a href="https://github.com/Keshavja29" target="_blank" rel="noopener noreferrer">View All</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:keshavja29@gmail.com">keshavja29@gmail.com</a></li>
            <li><a href="https://linkedin.com/in/keshavjat" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Keshavja29" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Keshav Jat. Made with <FaHeart className="heart-icon" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
