import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Profile Photo */}
        <div className="profile-photo">
          <img 
            src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/1851ee77-0b86-4c6d-9cee-914056ecdef1/2025-12-31T05-21-59-264Z-4926ed9d-chat-image-1767158519245-0.jpg" 
            alt="Keshav Jadam - Full Stack Developer" 
            loading="eager"
            crossOrigin="anonymous"
          />
        </div>
        
        <p className="greeting">Hello, I'm</p>
        <h1>
          <span className="name">Keshav Jadam</span>
        </h1>
        <p className="hero-title">Full Stack Developer & Data Analyst</p>
        <p className="hero-description">
          Passionate about building scalable web applications and transforming data into actionable insights. 
          Specialized in MERN stack, Python, and modern web technologies.
        </p>
        
        <div className="hero-buttons">
          <Link to="projects" smooth duration={500} className="btn-primary">
            View My Work
          </Link>
          <Link to="contact" smooth duration={500} className="btn-secondary">
            Get In Touch
          </Link>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Keshavja29" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/keshavjat" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:keshavja29@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;
