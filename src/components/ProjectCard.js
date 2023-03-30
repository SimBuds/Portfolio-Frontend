import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, description, repoLink }) => {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{name}</h3>
      <p className="project-card-description">{description}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-card-link">View on GitHub</a>
    </div>
  );
};

export default ProjectCard;