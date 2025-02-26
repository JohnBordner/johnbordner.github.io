import "./NavBar.css";

interface NavBarProps {
  scrollToHome: () => void;
  scrollToProjects: () => void;
  scrollToSkills: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToHome,
  scrollToProjects,
  scrollToSkills,
}) => {
  return (
    <header>
      <nav className="nav_buttons">
        <button id="home" type="button" onClick={scrollToHome}>
          Home
        </button>

        <button id="projects" type="button" onClick={scrollToSkills}>
          Skills
        </button>

        <button id="projects" type="button" onClick={scrollToProjects}>
          Projects
        </button>

        <a href="https://drive.google.com/file/d/1PtQfUXnvrgJEQZ9ofU_2wDJB-Quo1en2/view?usp=sharing">
          <button id="resume" type="button">
            Resume
          </button>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
