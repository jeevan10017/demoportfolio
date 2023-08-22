import React from 'react';
import project1Image from './project-1.jpg';
import project2Image from './project-2.jpg';
import './Projects.css';

const projects = [
  {
    title: 'Random Quote Generator',
    description: 'it generates a random quotes with their authors by just clicking a button ',
    imageUrl:project1Image,
          
    link: 'https://github.com/jeevan10017/Random_Quote_generator',
  },
  {
    title: 'Portfolio',
    description: 'Its just a demo portfolio of me',
    imageUrl:project2Image,
    link: '/',
  },
  
  
];

const Projects = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2>Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
