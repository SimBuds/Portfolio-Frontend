import React from 'react';
import '../assets/FeaturedProjects.css';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.png';

const projects = [
  {
    name: 'Menu Master Restaurant Management System',
    image: project1Image,
    description: 'This cross-platform web-based application is designed to streamline restaurant operations, from managing ingredient inventory and menu items to employee scheduling and more.',
    tags: ['React', 'MongoDB', 'Rust', 'Rocket'],
    link: 'https://github.com/SimBuds/Menu-Master-Web'
  },
  {
    name: 'Weather App with React',
    image: project2Image,
    description: 'Stay updated with the latest weather information! This React application fetches real-time weather data using the OpenWeatherMap API and displays it in a user-friendly interface.',
    tags: ['React', 'Axios', 'OpenWeatherMap API', 'Vercel'],
    link: 'https://github.com/SimBuds/Weather-App-React'
  },
  {
    name: 'SpaceX Launch Tracker with Angular',
    image: project3Image,
    description: 'Blast off with this Angular application! Users can view upcoming SpaceX launches, as well as details about past launches, all fetched from the SpaceX API.',
    tags: ['Angular','Bootstrap', 'SpaceX API', 'Render'],
    link: 'https://github.com/SimBuds/SpaceX-Angular'
  },
  {
    name: 'Employee-Management-System-MERN',
    image: project4Image,
    description: 'This MERN stack application allows users to manage employees, departments, and roles within a company. It features a user-friendly interface and a secure login system for easy access to employee data.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    link: 'https://github.com/SimBuds/Employee-Management-System-MERN'
  }
];

const FeaturedProjects = () => {
  return (
    <div className="featured-projects-wrapper">
      <div className="project-header" id="projects">
        <h2>FEATURED PROJECTS</h2>
        <p>Explore my portfolio, showcasing some of my most intriguing and innovative projects.</p>
      </div>
      <div className="featured-projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-image-link">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
            </a>
            <div className="project-content">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title-link">
                <h3>{project.name}</h3>
              </a>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Visit Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;