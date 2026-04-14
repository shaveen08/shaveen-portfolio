import React from "react";
import "../styles/ProjectCard.css";

import chatappBanner from "/assets/thumbnail/chat-app.jpg";
import harryPotterBanner from "/assets/thumbnail/harry-potter-api.jpg";
import appleLandingPageBanner from "/assets/thumbnail/apple-landingpage-clone.jpg";
import calculatorBanner from "/assets/thumbnail/calculator.jpg";

const ProjectComponent = ({ project }) => {
  const projectImg = [
    {title: "Chat App", thumbnail: chatappBanner },
    {title: "Harry Potter API", thumbnail: harryPotterBanner},
    {title: "Apple Landing Page Clone", thumbnail: appleLandingPageBanner },
    {title: "Calculator", thumbnail: calculatorBanner },
  ]
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
