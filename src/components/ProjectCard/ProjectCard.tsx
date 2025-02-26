import React from "react";
import "./ProjectCard.css";



interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  image: string;
  link: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  //link,
  github,
}) => {
  return (
    <div className="project-card">
      <img src={image} className="project-image" alt={title} />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-tech-stack">
          <strong>Tech Stack:</strong> {techStack}
        </p>
        <div className="project-links">
          {/* TEMPORARY TILL PROJECTS ARE DEPLOYED
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
          */}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
