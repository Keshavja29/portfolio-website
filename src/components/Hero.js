import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h3 className="hero-greeting fade-in">Hi, I'm</h3>
          <h1 className="hero-name fade-in-up">Keshav Jat</h1>
          <h2 className="hero-title fade-in-up">
            <span className="typing-text">Full Stack Developer</span>
          </h2>
          <p className="hero-description fade-in-up">
            I build scalable web applications and turn data into insights. 
            Passionate about creating beautiful, functional solutions with modern technologies.
          </p>
          
          <div className="hero-buttons fade-in-up">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>

          <div className="hero-social fade-in">
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

        <div className="hero-image fade-in">
          <div className="image-placeholder">
            <div className="code-animation">
              <span>{'<'}</span>
              <span>{'code'}</span>
              <span>{'>'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
