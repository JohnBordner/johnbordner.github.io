import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsContainer.css";

interface Project {
  title: string;
  description: string;
  techStack: string;
  image: string;
  link: string;
  github: string;
}

const projectList: Project[] = [
  {
    title: "NFL Pick'em Tracker",
    description: "Predict the outcome of NFL games and track your record",
    techStack: "Java, Spring, mySQL, RapidAPI, HTML/CSS",
    image: "predict-football1.png",
    link: "https://example.com/project1",
    github: "https://github.com/JohnBordner/NFLPredictionTracker",
  },
  {
    title: "CMD Chat",
    description: "A command line chat client and TCP server program",
    techStack: "Python",
    image: "chat-demo.png",
    link: "https://example.com/project2",
    github: "https://github.com/JohnBordner/chat_program",
  },
  {
    title: "JohnBordner.com",
    description: "This is my portfolio website that I built using React",
    techStack: "React, Typescript, HTML/CSS",
    image: "website-code.png",
    link: "https://johnbordner.com",
    github: "https://github.com/JohnBordner/johnbordner.github.io",
  },
];

const ProjectsContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the section is visible. This hasn't been implemented yet
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="projects-container" ref={containerRef}>
      <div className={`projects ${isVisible ? "visible" : ""}`}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
