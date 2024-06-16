
import React from "react";
import './Navbar.css';
//import logo from '../Assets/Ayush.png';//
// import { a } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faGraduationCap, faWrench, faDiagramProject, faIdCard } from '@fortawesome/free-solid-svg-icons';
// import { BrowserRouter as Router, Route, Switch, a } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="header-container">
      <header className="header">
      <button>
          Ayush
      </button>
      </header>
      <nav className="navbar">
        <div className="nav-item">
          <FontAwesomeIcon icon={faHouse} style={{ color: '#f58a2c' }} />
          <a href="#home"  className="navbar-menu">Home</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUser} style={{ color: '#f58a2c' }} />
        <a href="#about"  className="navbar-menu">About</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#f58a2c' }} />
          <a href="#education"  className="navbar-menu">Education</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faWrench} style={{ color: '#f58a2c' }} />
          <a href="#skills"  className="navbar-menu">Skills</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faDiagramProject} style={{ color: '#f58a2c' }} />
          <a href="#projects"  className="navbar-menu">Projects</a>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faIdCard} style={{ color: '#f58a2c' }} />
          <a href="#contact"  className="navbar-menu">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;