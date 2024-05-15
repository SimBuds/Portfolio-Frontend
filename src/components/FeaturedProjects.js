import React from 'react';
import '../assets/FeaturedProjects.css';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';

const projects = [
  {
    name: 'Menu Master RMS',
    image: project1Image,
    description: 'A restaurant management system for the small to medium-sized business.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/SimBuds/menu-master-web'
  },
  {
    name: 'GT7 Race Tracker',
    image: project2Image,
    description: 'An Application to track and manage racing events for Gran Turismo 7.',
    tags: ['Python', 'Flask', 'SQLite'],
    link: 'https://github.com/SimBuds/GT7-Racing-Program'
  },
  {
    name: 'Tic Tac Toe AI Mini-Max',
    image: project3Image,
    description: 'Tick Tac Toe game with AI using Mini-Max algorithm.',
    tags: ['Java', 'AI', 'JavaFX', 'Mini-Max'],
    link: 'https://github.com/SimBuds/TicTacToe-MiniMax'
  },
  {
    name: 'JavaFX CRUD Quiz Game',
    image: project4Image,
    description: 'A simple CRUD Quiz Game using JavaFX and SQLite.',
    tags: ['JavaFX', 'SQLite', 'Java'],
    link: 'https://github.com/SimBuds/JavaFX-CRUD-Quiz-Game'
  },
  {
    name: 'Toronto Pearson Airport Flight System Application',
    image: project5Image,
    description: 'A simple Flight System Application using CRUD and C#.',
    tags: ['C#', 'ASP.NET'],
    link: 'https://github.com/SimBuds/Flight-System-Using-CRUD-and-C-'
  }
];

const FeaturedProjects = () => {
  return (
    <div className="featured-projects-wrapper">
      <div className="project-header">
        <h2>Projects</h2>
        <p>Here you will find some of my personal and school projects that I created</p>
      </div>
      <div className="featured-projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <button onClick={() => window.open(project.link, '_blank')}>Visit Repo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;