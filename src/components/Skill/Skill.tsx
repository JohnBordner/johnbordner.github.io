import React from "react";
import "./Skill.css";

interface SkillProps {
  name: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ name, icon }) => {
  return (
    <div className="skill">
      <img src={icon} alt={`${name} Icon`} className="skill-icon" />
      <span className="skill-name">{name}</span>
    </div>
  );
};

export default Skill;
