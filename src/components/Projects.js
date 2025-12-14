import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with React and OpenWeatherMap API featuring current weather, 7-day forecast, city search, and interactive charts.',
      tech: ['React', 'Axios', 'Chart.js', 'OpenWeatherMap API'],
      github: 'https://github.com/Keshavja29/weather-dashboard-react',
      live: 'https://weather-dashboard-react-git-main-keshavs-projects-ff4dde9b.vercel.app',
      icon: '🌤️'
    },
    {
      title: 'Task Management System',
      description: 'Full-stack task management app with user authentication, CRUD operations, priority levels, and real-time analytics dashboard.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Keshavja29/task-management-system',
      live: null,
      icon: '🎯'
    },
    {
      title: 'Expense Tracker',
      description: 'Personal finance tracker with income/expense tracking, budget management, monthly reports, and interactive charts.',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Keshavja29/expense-tracker-mern',
      live: null,
      icon: '💰'
    },
    {
      title: 'E-Commerce REST API',
      description: 'Comprehensive e-commerce backend with product management, shopping cart, order processing, and JWT authentication.',
      tech: ['Python', 'Django', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/Keshavja29/ecommerce-rest-api',
      live: null,
      icon: '🛒'
    },
    {
      title: 'Job Portal Application',
      description: 'Enterprise-grade job portal with job listings, application management, role-based access control, and resume upload.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
      github: 'https://github.com/Keshavja29/job-portal-springboot',
      live: null,
      icon: '💼'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for CSV/Excel data with multiple chart types, statistical analysis, and export capabilities.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
      github: 'https://github.com/Keshavja29/data-visualization-dashboard',
      live: null,
      icon: '📊'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <FaGithub /> Code
              </a>
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link project-link-live"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {!project.live && (
                <span className="coming-soon">🚀 Deploying Soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
