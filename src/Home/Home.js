import React from "react";
import profilePic from '../Assets/IMG_1395.jpg';
import Resume from '../Assets/Resume.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Typing from "../Typing/Typing";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="toggle-button">
        <FontAwesomeIcon icon={faBars} /> 
      </div>
      <div className="content">
        <div className="left">
          <img src={profilePic} alt="Profile Pic" className="profile-pic"/>
        </div>
        <div className="right">
          <div className="designation">Web Developer</div>
          <div className="typing">
            <Typing
              text={[
                "Hello, I am Ayush Kesharwani!",
                "Welcome to my Portfolio!",
                "Your Vision, My Expertise :)",
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              duration={1000}
            />
          </div>
          <div className="info">
            <p>
              Life may be a meandering path but don't worry about it, rather enjoy it. It is about the journey, not the destination so explore all that comes your way, learn and grow from it, for this journey only happens once.
            </p>
          </div>
          <div className="button-container">
            <button className="download-cv"><a href={Resume} Download CV target="_blank" rel="noreferrer">Download CV</a></button>
          </div>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ayush-kesharwani-516803208/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Ayush307K">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/ayush.__.kesharwani/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://x.com/Ayush_k2605"> 
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.youtube.com/@ayushkesharwani7236">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default Home;
