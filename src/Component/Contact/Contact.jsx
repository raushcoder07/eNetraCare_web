import React from 'react';
import './ContactCSS.css';
// import contactImg from './images/contact.png'; // Uncomment and provide the correct path to your image

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">

        <div className="row" style={{ width: '50%', margin: '4% 0' }}>
          <div className="">
            <address className='contact-details'>
              <strong id='company-name'>Innovease India Private Limited.</strong><br />
              P NO 27, MOTI DOONGRI YOJANA,<br />
              GOVIND MARG,<br />
              Jaipur, Rajasthan, India, 302004<br />
              Year of Founding: 2021<br />
              Phone: +91-9923795140 / +91-9284197126
            </address>

            <address className='email-details'>
              <strong id='email-title'>Email <i className="fa-regular fa-envelope"></i></strong><br />
              <div className="email-list">
                <a href="mailto:#"> innoveaseindia@rediffmail.com </a>
                <a href="mailto:#"> aabhamaikar1982@gmail.com</a>
              </div>
            </address>
          </div>

        </div>

        <div className="google-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.154063706936!2d75.81483931450769!3d26.872315668382107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4a5f4d5ed8f%3A0xe9a9cde4814b0ed4!2sInnovease%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1622543421470!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
