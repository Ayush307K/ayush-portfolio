import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';

function ContactForm() {
    function handleSubmit(event) {
        event.preventDefault();

        fetch('/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                message: event.target.message.value,
            }),
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Failed to send message.');
        });
    }

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <h3>I'm interested in...</h3>
            <div className='interest-buttons'>
                <button type="button">Web Development</button>
                <button type="button">Hiring</button>
                <button type="button">Freelance</button>
                <button type="button">Other</button>
            </div>
            <div className='form-sections'>
                <h4>Enter Name *</h4>
                <input type="text" name="name" placeholder="" className='form-sections-input' required />
                <h4>Enter Email *</h4>
                <input type="email" name="email" placeholder="" className='form-sections-input' required />
                <h4>Enter Phone No.</h4>
                <input type="tel" name="phone" placeholder="" className='form-sections-input' />
                <h4>Enter Message *</h4>
                <textarea name="message" placeholder="" className='form-sections-textarea' required></textarea>
                <button className='sendmessage-btn' type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
