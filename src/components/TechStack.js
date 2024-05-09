import React from 'react';
import {
  siPython, siJavascript, siCsharp, siPhp, 
  siSwift, siAndroid, siRust, siHtml5, siCss3,
  siOracle, siMysql, siMongodb, siPostgresql,
  siLinux, siApple, siWindows,
  siDotnet, siSpringboot, siReact, siAngular,
  siDocker, siPostman, siGit
} from 'simple-icons/icons';
import '../assets/TechStack.css';


const techCategories = {
  "Programming Languages:": [
    { name: 'Python', color: '#3776AB', icon: siPython },
    { name: 'JavaScript', color: '#F7DF1E', icon: siJavascript },
    { name: 'C#', color: '#239120', icon: siCsharp },
    { name: 'PHP', color: '#777BB4', icon: siPhp },
    { name: 'Swift', color: '#FA7343', icon: siSwift },
    { name: 'Android', color: '#3DDC84', icon: siAndroid },
    { name: 'Rust', color: '#B7410E', icon: siRust },
    { name: 'HTML', color: '#E34F26', icon: siHtml5 },
    { name: 'CSS', color: '#1572B6', icon: siCss3 }
  ],
  "Databases:": [
    { name: 'Oracle SQL', color: '#F80000', icon: siOracle },
    { name: 'MySQL', color: '#4479A1', icon: siMysql },
    { name: 'MongoDB', color: '#47A248', icon: siMongodb },
    { name: 'Postgres', color: '#336791', icon: siPostgresql }
  ],
  "Operating Systems:": [
    { name: 'Linux', color: '#FCC624', icon: siLinux },
    { name: 'Mac', color: '#A2AAAD', icon: siApple },
    { name: 'Windows', color: '#0078D6', icon: siWindows }
  ],
  "Frameworks:": [
    { name: 'ASP.NET', color: '#512BD4', icon: siDotnet },
    { name: 'Spring Boot', color: '#6DB33F', icon: siSpringboot },
    { name: 'React', color: '#61DAFB', icon: siReact },
    { name: 'Angular', color: '#DD0031', icon: siAngular }
  ],
  "Tools:": [
    { name: 'Docker', color: '#2496ED', icon: siDocker },
    { name: 'Postman', color: '#FF6C37', icon: siPostman },
    { name: 'Git', color: '#F05032', icon: siGit }
  ]
};

function TechStack() {
  return (
    <div className="tech-stack">
      {Object.entries(techCategories).map(([category, techs]) => (
        <div className="category" key={category}>
          <h2>{category}</h2>
          <div className="category-items">
            {techs.map(tech => (
              <div className="tech-item" key={tech.name} style={{ backgroundColor: tech.color }}>
                <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: tech.icon.svg }} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;