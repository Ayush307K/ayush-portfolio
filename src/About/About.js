import Interests from "./Interests";
import profile from "../Assets/Astronot.gif";
import './About.css';
function About() {
  return (
    <div className="about" id="about">
      <div className="about-main">
        <div className="about-heading-img">
          <img src={profile} alt={"MyImage"} className="about-img"/>
        </div>
        <div className="about-text">
          <h1><span>👋</span> Hey there</h1>
          <br/>
          <p>I'm Ayush, a dedicated software developer with a passion for Web Development. I excel in creating seamless user experiences and building robust backend solutions. With a strong problem-solving ability, I enjoy writing clean, efficient code that makes a difference. Continuously exploring new tools and technologies, I stay updated with the latest trends in the ever-evolving tech world.
            <br />
            <br />
            📫 Eager to connect with fellow developers and tech enthusiasts for collaborations and exciting projects. Let's build something amazing together!
            <br />
            <br />
            Happy coding! 🖥️ 
          </p>
        </div>  
      </div>
      <h4 className="interests-heading">INTERESTS</h4>
      <Interests />
    </div>
  );
}
export default About;