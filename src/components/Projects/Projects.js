import React, { useState, useEffect } from 'react';
import "./Projects.css";
import 'react-slideshow-image/dist/styles.css';
import { projects } from '../../data/projects';

const ProjectItem = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="project-item">
      <img 
        src={project.images[currentImageIndex]} 
        alt={`${project.title} - Image ${currentImageIndex + 1}`} 
      />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.country}</p>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">
        Our Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
