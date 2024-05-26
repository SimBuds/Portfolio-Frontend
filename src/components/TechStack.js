import React from 'react';
import {
  siHtml5, siCss3, siJavascript, siNextdotjs, siMysql, siMongodb, siPostgresql,
  siLinux, siApple, siWindows, siReact, siAngular, siDocker, siPostman, siGit
} from 'simple-icons/icons';
import '../assets/TechStack.css';

const techCategories = {
  "Programming Languages": [
    { name: 'JavaScript', color: '#F7DF1E', icon: siJavascript },
    { name: 'HTML5', color: '#E34F26', icon: siHtml5 },
    { name: 'CSS3', color: '#1572B6', icon: siCss3 },
  ],
  "Databases": [
    { name: 'MongoDB', color: '#47A248', icon: siMongodb },
    { name: 'Postgres', color: '#336791', icon: siPostgresql },
    { name: 'MySQL', color: '#4479A1', icon: siMysql },
  ],
  "Operating Systems": [
    { name: 'Linux', color: '#FCC624', icon: siLinux },
    { name: 'Windows', color: '#0078D6', icon: siWindows },
    { name: 'Mac', color: '#A2AAAD', icon: siApple },
  ],
  "Frameworks": [
    { name: 'React', color: '#61DAFB', icon: siReact },
    { name: 'Angular', color: '#DD0031', icon: siAngular },
    { name: 'Next.js', color: '#ffffff', icon: siNextdotjs },
  ],
  "Tools": [
    { name: 'Docker', color: '#2496ED', icon: siDocker },
    { name: 'Postman', color: '#FF6C37', icon: siPostman },
    { name: 'Git', color: '#F05032', icon: siGit }
  ]
};

function TechStack() {
  return (
    <div className="tech-stack">
      <h2>MY TECH STACK</h2>
      <p>Check out my tech stack, to see which tools and languages I'm most comfortable with.</p>
      <div className="category-row">
        {['Operating Systems', 'Programming Languages', 'Tools'].map(category => (
          <div className="category" key={category}>
            <h3>{category}</h3>
            <div className="tech-items">
              {techCategories[category].map(tech => (
                <div className="tech-item" key={tech.name} style={{ backgroundColor: tech.color }}>
                  {React.isValidElement(tech.icon) ? (
                    tech.icon
                  ) : (
                    <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: tech.icon.svg }} />
                  )}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="category-row">
        {['Databases', 'Frameworks'].map(category => (
          <div className="category" key={category}>
            <h3>{category}</h3>
            <div className="tech-items">
              {techCategories[category].map(tech => (
                <div className="tech-item" key={tech.name} style={{ backgroundColor: tech.color }}>
                  {React.isValidElement(tech.icon) ? (
                    tech.icon
                  ) : (
                    <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: tech.icon.svg }} />
                  )}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;