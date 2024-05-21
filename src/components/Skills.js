// src/components/Skills.js
import React from 'react';
import './Skills.css';
import { FaJs, FaReact, FaCss3Alt, FaHtml5, FaDatabase, FaPython, FaMicrosoft, FaDotCircle, FaMobileAlt } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', level: 90, icon: <FaJs />, animation: 'fade-left' },
  { name: 'React', level: 50, icon: <FaReact />, animation: 'fade-right' },
  { name: 'CSS', level: 40, icon: <FaCss3Alt />, animation: 'fade-left' },
  { name: 'HTML', level: 55, icon: <FaHtml5 />, animation: 'fade-right' },
  { name: 'Database', level: 88, icon: <FaDatabase />, animation: 'fade-left' },
  { name: 'Python', level: 20, icon: <FaPython />, animation: 'fade-right' },
  { name: 'C#', level: 60, icon: <FaMicrosoft />, animation: 'fade-left' },
  { name: '.NET', level: 90, icon: <FaDotCircle />, animation: 'fade-right' },
  { name: 'Flutter', level: 90, icon: <FaMobileAlt />, animation: 'fade-left' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={skill.name} data-aos={skill.animation} data-aos-delay={index * 100}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}>
                <span> </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
