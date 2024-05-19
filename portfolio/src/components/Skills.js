// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 80 },
  { name: 'CSS', level: 75 },
  { name: 'HTML', level: 60 },
  { name: 'Database', level: 88 },
  { name: 'Python', level: 50 },
  { name: 'C#', level: 70 },
  { name: '.NET', level: 90 },
  { name: 'Flutter', level: 90 },
  // add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <h3>{skill.name}</h3>
            <div className="progress-bar" style={{ width: `${skill.level}%` }}>
              <span>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
