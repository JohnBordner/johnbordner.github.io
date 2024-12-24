import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/ProjectsContainer/ProjectsContainer";
import Bio from "./components/Bio/Bio";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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
