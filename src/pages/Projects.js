import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const projectData = [
  {
    id: 1,
    name: 'Project 1',
    description: 'This is a description of Project 1.',
    repoLink: 'https://github.com/SimBuds/TicTacToe-MiniMax'
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'This is a description of Project 2.',
    repoLink: 'https://github.com/SimBuds/GT7-Racing-Program'
  },
  // Add more projects here
];

const Projects = () => {
    return (
      <div className="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projectData.map(project => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Projects;