import React from "react";
import SkillContainer from "../SkillContainer/SkillContainer";
import "./Skills.css";

const Skills: React.FC = () => {
  console.log("Skills component is rendering");
  return (
    <section className="skills-section">
      <h1>My Skills</h1>
      <SkillContainer
        title="Languages"
        skills={[
          {
            name: "Java",
            icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
          },

          {
            name: "Python",
            icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
          },
          {
            name: "JS/TS",
            icon: "https://cdn-icons-png.freepik.com/512/919/919832.png",
          },
          {
            name: "C",
            icon: "https://img.icons8.com/?size=512&id=40670&format=png",
          },
        ]}
      />
      <SkillContainer
        title="Frameworks & Libraries"
        skills={[
          { name: "React", icon: "/react.svg" },
          {
            name: "Spring",
            icon: "https://img.icons8.com/?size=512&id=90519&format=png",
          },
          {
            name: "Next.js",
            icon: "https://images.seeklogo.com/logo-png/32/2/next-js-logo-png_seeklogo-321806.png",
          },
          {
            name: "Node.js",
            icon: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png",
          },
        ]}
      />

      {/*
      <SkillContainer
        title="Databases"
        skills={[
          {
            name: "MySQL",
            icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
          },
          {
            name: "SQLite",
            icon: "https://cdn.iconscout.com/icon/free/png-256/free-sqlite-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-6-pack-icons-282687.png?f=webp",
          },
        ]}
      />
      */}
    </section>
  );
};

export default Skills;
