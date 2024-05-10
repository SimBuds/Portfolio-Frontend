import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/FeaturedProjects.css';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';

const projects = [
    {
      name: 'Menu Master RMS',
      image: project1Image,
      description: 'Physical product with a sleek customization editor.',
      link: '/projects/menu-master-rms'
    },
    {
      name: 'Race Track App',
      image: project2Image,
      description: 'Fouad needed a clean one-pager for his tech startup.',
      link: '/projects/race-track-app'
    },
    // Add more projects as necessary
  ];
  

const FeaturedProjects = () => {
  return (
    <div className="featured-projects">
      {projects.map(project => (
        <div key={project.name} className="project-card">
          <Link to={project.link}>
            <img src={project.image} alt={project.name} className="project-image"/>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;