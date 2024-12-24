import { useState } from "react";
import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/ProjectsContainer/ProjectsContainer";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Bio from "./components/Bio/Bio";

function App() {
  const [count, setCount] = useState(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
      ></NavBar>

      <div ref={homeRef}>
        <Bio />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
