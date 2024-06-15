import React from 'react'
import './ContactCSS.css'
import contactImg from './images/contact.png'

const Contact = () => {
  return (
    // <div classNameName="contact-container">
    //   <div classNameName="contact-content">
    //     <h1 id='contact-title'>Connect with us  </h1>
    //     <div>
    //       <div classNameName='contact-details'>
    //       <i className="fa-solid fa-phone"></i>
    //       <p id='contact-number'>+1-423-826-6231</p>
    //       </div>

    //       <div classNameName='contact-details'>
    //       <i className="fa-solid fa-location-dot"></i>
    //       <div><p id='contact-address'> 998 Broadway Avenue <br /> Zip:19054, Levittown <br />Pennsylvania,United States</p></div>

    //       </div>

    //     </div>
    //   </div>
    // </div>

    <div className='contact-page'>
      <div className="contact-container">
        <div className="row" style={{ width: '50%', margin: '8% 0' }}>
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
        <div className="contact-img-container">
          <img src={contactImg} className='contact-img' />
        </div>
      </div>
    </div>
  )
}

export default Contact