import React from 'react';
import { FaReact, FaNode, FaPython, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiExpress, SiDjango, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: '🟨', level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80 },
        { name: 'HTML/CSS', icon: '🎨', level: 95 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'Express', icon: <SiExpress />, level: 80 },
        { name: 'Django', icon: <SiDjango />, level: 75 },
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 70 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'MySQL', icon: <FaDatabase />, level: 80 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 }
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: '🟨', level: 90 },
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'Java', icon: <FaJava />, level: 75 },
        { name: 'SQL', icon: '📊', level: 80 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tools-section">
        <h3>Tools & Platforms</h3>
        <div className="tools-grid">
          <div className="tool-badge"><FaGitAlt /> Git</div>
          <div className="tool-badge">🐙 GitHub</div>
          <div className="tool-badge">📮 Postman</div>
          <div className="tool-badge">💻 VS Code</div>
          <div className="tool-badge">🐳 Docker</div>
          <div className="tool-badge">☁️ Vercel</div>
          <div className="tool-badge">🚂 Railway</div>
          <div className="tool-badge">📊 Jupyter</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
