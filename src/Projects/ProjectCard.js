import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ projectName, projectLink, projectImage, githubLink }) {
  return (
    <div className='card'>
      <div className='card-overlay'>
        <img src={projectImage} alt={projectName} className='card-image'/>
        <div className='card-icons'>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} className='icon'/>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className='icon'/>
          </a>
        </div>
      </div>
      <h2>{projectName}</h2>
    </div>
  );
}

export default ProjectCard;
