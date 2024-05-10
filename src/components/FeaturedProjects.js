import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  const [activeIndex] = useState(0);
  const projectsRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;


const handleMouseDown = (e) => {
  isDown = true;
  startX = e.pageX - projectsRef.current.offsetLeft;
  scrollLeft = projectsRef.current.scrollLeft;
  projectsRef.current.style.cursor = 'grabbing';
};

const handleMouseLeave = () => {
  isDown = false;
  projectsRef.current.style.cursor = 'grab';
};

const handleMouseUp = () => {
  isDown = false;
  projectsRef.current.style.cursor = 'grab';
};

const handleMouseMove = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - projectsRef.current.offsetLeft;
  const walk = (x - startX);
  projectsRef.current.scrollLeft = scrollLeft - walk;
};
  
  return (
    <div className="featured-projects-wrapper" id="projects">
      <div className="project-header">
        <h2>Projects</h2>
        <p>Here you will find some of my school and personal projects that I have created so far.</p>
      </div>
      <div ref={projectsRef}
           className="featured-projects"
           onMouseDown={handleMouseDown}
           onMouseLeave={handleMouseLeave}
           onMouseUp={handleMouseUp}
           onMouseMove={handleMouseMove}>
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <Link to={project.link}>
              <img src={project.image} alt={project.name} className="project-image"/>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="scroll-indicators">
        {projects.map((_, index) => (
          <div key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}></div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;