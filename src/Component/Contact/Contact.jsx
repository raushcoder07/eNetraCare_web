import React from 'react'
import './ContactCSS.css'

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
    <div classNameName='contact'>
      <div className="contact-container">
        <div className="row">
          <div className="col-md-4">
            <address>
              <strong>Example Inc.</strong><br />
              1234 Example Street<br />
              Antartica, Example 0987<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>

            <address>
              <strong>Full Name</strong><br />
              <a href="mailto:#">exam.ple@example.com</a>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact