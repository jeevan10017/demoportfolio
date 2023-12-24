import React from 'react';
import project1Image from './project-1.jpg';
import project2Image from './project-2.jpg';
import './Projects.css';

const projects = [
  {
    title: 'Random Quote Generator',
    description: 'Generates random quotes with authors by clicking a button.',
    imageUrl: project1Image,
    link: 'https://github.com/jeevan10017/Random_Quote_generator',
    technologies: ['HTML', 'CSS'],
    tags: ['React', 'Responsive Design'],
  },
  {
    title: 'Portfolio',
    description: 'Demo portfolio showcasing projects and skills.',
    imageUrl: project2Image,
    link: 'https://scintillating-swan-ff8c0d.netlify.app/',
    technologies: ['React', 'CSS', 'HTML','JavaScript'],
    tags: ['Web Development', 'Responsive Design'],
  },
];

const ProjectCard = ({ project }) => (
  <div className="portfolio-card">
    <img src={project.imageUrl} alt={project.title} />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="technologies">
      <strong>Technologies:</strong> {project.technologies.join(', ')}
    </div>
    <div className="tags">
      <strong>Tags:</strong> {project.tags.join(', ')}
    </div>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      View
    </a>
  </div>
);

const Projects = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2>Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
