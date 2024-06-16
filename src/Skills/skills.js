import { faJava, faReact, faHtml5, faCss3, faNodeJs, faPython, faJs, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const skills = [
    { icon: faJava, title: "Java" },
    { icon: faPython, title: "Python" },
    { icon: faJs, title: "JavaScript" },
    { icon: faReact, title: "React" },
    { icon: faHtml5, title: "HTML5" },
    { icon: faCss3, title: "CSS3" },
    { icon: faGithub, title: "GitHub" },
    { icon: faGit, title: "Git" },
    { icon: faNodeJs, title: "NodeJs" },
];

function Skills() {
  return (

    <div id='skills' className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <FontAwesomeIcon icon={skill.icon} />
              <h4>{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
