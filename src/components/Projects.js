// src/components/Projects.js
import React from 'react';
import './Projects.css';
import P1 from './chat.jpg'
import P2 from './ems.jpg'
import P3 from './univents.jpg'

const projects = [
  {
    name: 'ChattyApp',
    description: 'RTC Chat Application built using Blazor on .NET.',
    image: P1,
  },
  {
    name: 'Emoloyee Management System',
    description: 'EMS to manage the new employees, their Payrolls etc.',
    image: P2,
  },
  {
    name: 'Univents',
    description: 'An android application built to manage University Events.',
    image: P3,
  },
  // add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
