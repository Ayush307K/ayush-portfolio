import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from '../extras/Socialmedia';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
    return (
        <div className='contact-container' id="contact">
            <div className='contact'>
                <div className='contact-details'>
                    <h1>Let's discuss on <br/> something <span>cool</span> <br/>together</h1>
                    <div className='contact-links'>
                        <a href="mailto:ayushkesharwani415@gmail.com" > 
                            <FontAwesomeIcon icon={faEnvelope} className='fa-icon' />
                            <h4>ayushkesharwani415@gmail.com</h4>
                        </a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Bangalore,India"> 
                            <FontAwesomeIcon icon={faLocation} className='fa-icon'/> 
                            <h4>Bangalore, India</h4>
                        </a>
                    </div>
                    <SocialMedia />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact;
