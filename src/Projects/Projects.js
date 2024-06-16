import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import portfolioImg from '../Assets/Portfolio.test.png';
import quizApp from '../Assets/QuizApp.jpeg';
import MusicPlayer from '../Assets/MusicPlayer.webp';
import TwitterClone from '../Assets/TwitterClone.jpeg';
import Delicious from '../Assets/Delicious.png';

const projects = [
  {
    name: 'Portfolio',
    link: 'https://portfolio-react-5fu0etsg9-ayush-kesharwanis-projects.vercel.app',
    image: portfolioImg,
    githubLink: 'https://github.com/Ayush307K/portfolio-react'
  },
  {
    name: 'QuizApp',
    link: 'https://ayush307k.github.io/Quiz-app/',
    image: quizApp,
    githubLink: 'https://github.com/Ayush307K/Quiz-app'
  },
  {
    name: 'Music Player',
    link: 'https://ayush307k.github.io/Music-Player-Project/',
    image: MusicPlayer,
    githubLink: 'https://github.com/Ayush307K/Music-Player-Project'
  },
  {
    name: 'Twitter',
    link: 'https://ayush307k.github.io/Twitter-Finals/',
    image: TwitterClone,
    githubLink: 'https://github.com/Ayush307K/Twitter-Finals'
  },
  {
    name: 'Delicious',
    link: 'https://ayush307k.github.io/Delicious/',
    image: Delicious,
    githubLink: 'https://github.com/Ayush307K/Delicious'
  }
];

function Projects() {
  return (
    <div className='project-page' id='projects'>
      <div className="projects-text">Projects</div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.name}
            projectLink={project.link}
            projectImage={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
