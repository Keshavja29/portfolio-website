import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            Hello! I'm <span className="highlight">Keshav Jat</span>, a passionate Full Stack Developer 
            and Data Analytics enthusiast based in India.
          </p>
          
          <p>
            I specialize in building exceptional digital experiences with modern web technologies. 
            My journey in tech started with a curiosity about how things work, and it has evolved 
            into a career where I get to create impactful solutions every day.
          </p>

          <p>
            I love working with <span className="highlight">React</span>, <span className="highlight">Node.js</span>, 
            <span className="highlight">Python</span>, and <span className="highlight">Java</span>. 
            Whether it's building responsive frontends, scalable backends, or analyzing data to derive insights, 
            I'm always excited to tackle new challenges.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <h3>6+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Commitment</p>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="card-icon">💻</div>
            <h3>Full Stack Development</h3>
            <p>Building end-to-end web applications with React, Node.js, and modern databases</p>
          </div>

          <div className="highlight-card">
            <div className="card-icon">📊</div>
            <h3>Data Analytics</h3>
            <p>Transforming raw data into actionable insights using Python and visualization tools</p>
          </div>

          <div className="highlight-card">
            <div className="card-icon">🚀</div>
            <h3>Problem Solver</h3>
            <p>Passionate about finding elegant solutions to complex technical challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
