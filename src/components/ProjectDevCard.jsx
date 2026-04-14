import React from "react";
import "../styles/ProjectCard.css";

const ProjectComponent = ({ project }) => {
  return (
    <div className="project-card">
      {/* Thumbnail */}
      <div className="project-banner">
        <img src={project.img} className="project-image" alt={project.title} />
      
        {/* CTA Buttons */}
        <div className="project-actions overlay">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn link"
          >
            Live Demo ↗
          </a>
        </div>
      </div>

      {/* Project card body */}
      <div className="project-card-body">
        {/* Project Date */}
        <span className="project-date">{project.date}</span>
        
        {/* Card header */}
        <div className="project-header">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-subtitle">{project.desc}</p>
        </div>

        {/* Tags */}
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>


      </div>
    </div>
  );
};

export default ProjectComponent;
