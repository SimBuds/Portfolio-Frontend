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
    description: 'This was a group capstone project for a restaurant management system that was I was responsible for the front-end development. It was a 2 semester SCRUM simulated project that was aimed at small to medium sized business to help manage their inventory, menu, and employee management and more.',
    tags: ['React', 'Rust', 'MongoDB', 'Rocket'],
    link: 'https://github.com/SimBuds/menu-master-web'
  },
  {
    name: 'GT7 Race Tracker',
    image: project2Image,
    description: 'Tasked with forming a group of 3 that would be responsibile for the idea, design and implementation of the project using Python. It was an desktop application that was aimed at Gran Turismo 7 players to help them track their lap times.',
    tags: ['Python', 'Flask', 'SQLite'],
    link: 'https://github.com/SimBuds/GT7-Racing-Program'
  },
  {
    name: 'Tic Tac Toe AI Mini-Max',
    image: project3Image,
    description: 'This project was given to us as a group in Data Structures and Algorithms class. We were tasked with creating a Tic Tac Toe game using JavaFX and implementing the Minimax algorithm to make the AI unbeatable. We learned the importance of recursion and how to implement the Minimax algorithm in a game like Tic Tac Toe.',
    tags: ['Java', 'AI', 'JavaFX', 'Minimax'],
    link: 'https://github.com/SimBuds/TicTacToe-MiniMax'
  },
  {
    name: 'JavaFX Programming Quiz Game',
    image: project4Image,
    description: 'In this project, we were tasked with creating a JavaFX application that would allow users to take a quiz. The quiz would be stored in a text file that the user would be able to see their score at the end of the quiz and the current leaderboard. We learned how to use JavaFX to create a GUI and how to read and write to a text file.',
    tags: ['JavaFX', 'CRUD', 'Java'],
    link: 'https://github.com/SimBuds/JavaFX-CRUD-Quiz-Game'
  },
  {
    name: 'TPA Airport Flight System Application',
    image: project5Image,
    description: 'This was a semester 4 group project that was given to us in our Object Oriented Programming class. The purpose of this project was to teach us the importance of Object Oriented Programming and how to implement it in a real world application. We were tasked with creating a flight system that would allow users to book flights, view their flights, and cancel their flights. We learned how to use C# to create a desktop application that would allow users to interact with the flight system. We also learned how to use CRUD operations to interact with the database to store the user information and flight information',
    tags: ['C#', 'ASP.NET', 'Data Structures', 'CRUD'],
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