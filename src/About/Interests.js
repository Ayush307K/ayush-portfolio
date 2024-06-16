import { faCode, faCoffee,faMicrochip,faChartBar,faTerminal,faRobot,faSpider, faSearch} from '@fortawesome/free-solid-svg-icons';
// import CustomComponent from '../extras/CustomFontAwesomeInterestComp.js';
import './Interests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const interests = [
  { icon: faCode, title: "Quantum Computing" },
  { icon: faCoffee, title: "Blockchain and Cryptocurrency" },
  { icon: faMicrochip, title: "Augmented Reality (AR) and Virtual Reality (VR)" },
  { icon: faSearch, title: "Market Research" },
  { icon: faChartBar, title: "Artificial Intelligence and Machine Learning" },
  { icon: faTerminal, title: "Software Development" },
  { icon: faRobot, title: "Robotics" },
  { icon: faSpider, title: "Cybersecurity" },
  { hidden: true },
  { hidden: true },
  { hidden: true },
];

function Interests() {
  return (
    <div className='interests'>
      {interests.map((interest) => (
        <div className={
          `interest-components ${interest.hidden ? 'hidden' : ''}`
        }>
          <FontAwesomeIcon icon={interest.icon} className='icon' />
          <h4>{interest.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Interests;