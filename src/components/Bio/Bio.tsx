import "./Bio.css";
import ImageContainer from "../ImageContainer/ImageContainer";

const Bio = () => {
  return (
    <div className="home-all">
      <ImageContainer src="headshot.jpg" alt="Headshot" />
      <div className="home-content">
        <h1>John Bordner</h1>
        <h3>Software Developer</h3>
        <p id="mainpara">
          I am a versatile developer passionate about building software
          solutions from the ground up, with a focus on quality, functionality,
          and user experience. My expertise lies in building robust Java web
          applications using the Spring framework, complemented by ongoing
          proficiency in React for modern web development. I am also deeply
          interested in mobile application development and continually expanding
          my skills to create impactful and user-centric applications.
        </p>
      </div>
    </div>
  );
};

export default Bio;
