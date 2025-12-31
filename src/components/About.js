import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer and Data Analyst with expertise in building 
              modern web applications and extracting meaningful insights from complex datasets.
            </p>
            <p>
              With a strong foundation in MERN stack, Python, and Java Spring Boot, I create 
              scalable solutions that solve real-world problems. My experience spans from 
              developing interactive dashboards to building enterprise-grade REST APIs.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying updated with the latest 
              technologies. When I'm not coding, you'll find me exploring new frameworks or 
              contributing to open-source projects.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-number">15+</div>
                <div className="highlight-label">Projects Completed</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">10+</div>
                <div className="highlight-label">Technologies</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">2+</div>
                <div className="highlight-label">Years Experience</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">100%</div>
                <div className="highlight-label">Dedication</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-image-wrapper">
              <img 
                src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/1851ee77-0b86-4c6d-9cee-914056ecdef1/2025-12-31T05-21-59-264Z-4926ed9d-chat-image-1767158519245-0.jpg" 
                alt="Keshav Jadam - Full Stack Developer" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
