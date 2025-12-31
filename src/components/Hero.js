import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="profile-photo">
          <img 
            src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/1851ee77-0b86-4c6d-9cee-914056ecdef1/2025-12-31T05-07-02-187Z-a898cac7-chat-image-1767157622167-1.jpg" 
            alt="Keshav Jadam" 
          />
        </div>
        
        <div className="greeting">Hello, I'm</div>
        
        <h1>
          <span className="name">Keshav Jadam</span>
        </h1>
        
        <p className="hero-title">Full Stack Developer & Data Analytics Expert</p>
        
        <p className="hero-description">
          Passionate about building scalable web applications and transforming data into actionable insights. 
          Specialized in MERN stack, Python, and modern web technologies. 
          I turn complex problems into elegant solutions.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
        
        <div className="social-links">
          <a 
            href="https://github.com/Keshavja29" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/keshavjat" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:keshavja29@gmail.com" 
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;
