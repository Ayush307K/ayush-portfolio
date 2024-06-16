import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Socialmedia.css';

const socialMediaLinks = [
    { href: "https://github.com/Ayush307K", icon: faGithub },
    { href: "https://www.instagram.com/ayush.__.kesharwani/", icon: faInstagram },
    { href: "https://www.linkedin.com/in/ayush-kesharwani-516803208/", icon: faLinkedin },
    { href: "https://x.com/Ayush_k2605", icon: faTwitter }
];
function SocialMedia(){
    return(
        <div className='social-media-links'>
            {socialMediaLinks.map((link) => (
                <a href={link.href} target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={link.icon}  />
                </a>
            ))}
        </div>
    )
}

export default SocialMedia;