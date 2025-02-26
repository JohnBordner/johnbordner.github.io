import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/ProjectsContainer/ProjectsContainer";
import Bio from "./components/Bio/Bio";
import Skills from "./components/Skills/Skills";

function App() {
  const homeRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const skillsRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
      ></NavBar>

      <div ref={homeRef}>
        <Bio />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
