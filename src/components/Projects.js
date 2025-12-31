import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaRocket } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with dark stormy glassmorphism theme. Features current weather, 7-day forecast, interactive charts, and geolocation support.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      tech: ['React', 'OpenWeatherMap API', 'Chart.js', 'CSS3'],
      liveLink: 'https://weather-dashboard-react-git-main-keshavs-projects-ff4dde9b.vercel.app',
      githubLink: 'https://github.com/Keshavja29/weather-dashboard-react',
      isLive: true
    },
    {
      id: 2,
      title: 'Data Visualization Dashboard',
      description: 'Interactive Python dashboard for analyzing CSV/Excel files. Generate beautiful charts, statistical analysis, correlation matrices, and export reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'NumPy'],
      liveLink: 'https://data-visualization-dashboard-cnfb.streamlit.app',
      githubLink: 'https://github.com/Keshavja29/data-visualization-dashboard',
      isLive: true
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Full-stack MERN application with JWT authentication, real-time analytics dashboard, priority-based task organization, and RESTful API architecture.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      liveLink: null,
      githubLink: 'https://github.com/Keshavja29/task-management-system',
      isLive: false
    },
    {
      id: 4,
      title: 'Expense Tracker',
      description: 'Personal finance management app with income/expense tracking, budget management, monthly reports, CSV export, and interactive analytics charts.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      liveLink: null,
      githubLink: 'https://github.com/Keshavja29/expense-tracker-mern',
      isLive: false
    },
    {
      id: 5,
      title: 'E-Commerce REST API',
      description: 'Comprehensive Django backend with product management, shopping cart, order processing, JWT authentication, and payment integration ready.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tech: ['Python', 'Django', 'PostgreSQL', 'REST API', 'JWT'],
      liveLink: null,
      githubLink: 'https://github.com/Keshavja29/ecommerce-rest-api',
      isLive: false
    },
    {
      id: 6,
      title: 'Job Portal Application',
      description: 'Enterprise-grade Spring Boot application with job listings, application management, role-based access control, resume upload, and advanced search filters.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Swagger'],
      liveLink: null,
      githubLink: 'https://github.com/Keshavja29/job-portal-springboot',
      isLive: false
    }
  ];

  const handleCardClick = (liveLink) => {
    if (liveLink) {
      window.open(liveLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Latest Projects</h2>
        <p className="projects-subtitle">
          Explore my recent work showcasing full-stack development, data analytics, and modern web technologies
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleCardClick(project.liveLink)}
              style={{ cursor: project.isLive ? 'pointer' : 'default' }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {project.isLive && (
                  <div className="live-badge">
                    <FaRocket /> LIVE
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
