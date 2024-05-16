import React from 'react';
import '../assets/FeaturedProjects.css';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';

const projects = [
  {
    name: 'Menu Master Restaurant Management System',
    image: project1Image,
    description: 'This cross-platform web-based application is designed to streamline restaurant operations, from managing ingredient inventory and menu items to employee scheduling and more.',
    tags: ['React', 'Rust', 'MongoDB', 'Rocket'],
    link: 'https://github.com/SimBuds/menu-master-web'
  },
  {
    name: 'Gran Turismo 7 Race Tracker',
    image: project2Image,
    description: 'Start your engines! Using Python, this companion desktop application was created to help gamers track their laps in Gran Turismo 7. The player can select their desired racing map to record their best lap times and compare against other players on the leaderboard.',
    tags: ['Python', 'Flask', 'SQLite'],
    link: 'https://github.com/SimBuds/GT7-Racing-Program'
  },
  {
    name: 'Tic-Tac-Toe AI MiniMax',
    image: project3Image,
    description: 'Want to play? Grab a friend for a round of Tic-Tac-Toe, or challenge our AI! Built with JavaFX and powered by the Minimax algorithm, our AI will keep you on your toes.',
    tags: ['Java', 'AI', 'JavaFX', 'Minimax'],
    link: 'https://github.com/SimBuds/TicTacToe-MiniMax'
  },
  {
    name: 'JavaFX Programming Quiz Game',
    image: project4Image,
    description: 'This JavaFX application delivers an engaging quiz experience. Users can take quizzes, view their scores, and check the current leaderboard, all stored and managed through a text file.',
    tags: ['JavaFX', 'CRUD', 'Java'],
    link: 'https://github.com/SimBuds/JavaFX-CRUD-Quiz-Game'
  },
  {
    name: 'Airport Flight System Application',
    image: project5Image,
    description: 'Ready for take-off? Using C# and Object-Oriented Programming (OOP), this flight management system allows you to book, view and cancel your flights. Additionally, it uses CRUD operations for efficient user and flight data management.',
    tags: ['C#', 'ASP.NET', 'Data Structures', 'CRUD'],
    link: 'https://github.com/SimBuds/Flight-System-Using-CRUD-and-C-'
  }
];

const FeaturedProjects = () => {
  return (
    <div className="featured-projects-wrapper" id="projects">
      <div className="project-header">
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