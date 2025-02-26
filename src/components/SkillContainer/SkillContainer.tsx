import React from "react";
import Skill from "../Skill/Skill";
import "./SkillContainer.css";

interface SkillProps {
  name: string;
  icon: string;
}

interface SkillContainerProps {
  title?: string;
  skills: SkillProps[]; // Array of skills
}

const SkillContainer: React.FC<SkillContainerProps> = ({ title, skills }) => {
  return (
    <div className="skill-container">
      {title && <h2 className="skill-container-title">{title}</h2>}
      <div className="skills-list">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillContainer;
