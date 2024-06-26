import React from 'react'
import '../../App.css'
import './HomeCSS.css'
import Image_sli from './Image_sli';
import AboutImg from './images/about-img.jpeg'
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import IMAGES from './index'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className='hero-title-container'>
        <div className="hero-title"> Welcome to&nbsp;<span style={{ color: '#004080' }}>eNetraCare</span></div>
        <p className="tagline">A visionary initiative by <Link to='/contact'>Innovease India Pvt. Ltd.</Link>  </p>
      </div>

      <div className="hero" style={{ position: 'relative' }}>
        <Image_sli />

      </div>

      {/* intro */}
      <div className="intro">
        <div className='intro-text'>
          <h2>About eNetraCare</h2>
          <p>eNetraCare by <Link to='/contact' style={{ color: '#0057ae' }}> Innovease India Private Limited</Link>  offers an affordable, portable eye care solution that brings vision testing and cataract screening to patients' doorsteps. Using a mobile app integrated with an AI-based Software, We address challenges like transportation, healthcare worker availability and data precision, focusing on underserved rural and slum areas in India.
          </p>
          <div className="know-btn-container">

            <Link to='/about' className='know-more-btn' >Know More</Link>
          </div>
        </div>
        <div className='intro-img'>
          <img src={AboutImg} alt="aboutus.png" />
        </div>
      </div>

      {/* services */}
      <div className="services">
        <h2 className='services-title'>Our Services</h2>
        <div className="sub-container">
          <div className="services-box-container">
            <ServiceCard
              className='animation'
              img={IMAGES.serviceimg1} />
            <ServiceCard
              className='animation'
              img={IMAGES.serviceimg2} />
            <ServiceCard
              className='animation'
              img={IMAGES.serviceimg3} />
          </div>

        </div>
      </div>
      <div className="testimonials">
        <h2>What Our Patients Say</h2>
        <p>"EyeCare AI helped me detect my cataracts early. The process was seamless and the care was exceptional." - Jane D.</p>
        <p>"Thanks to EyeCare AI, I received timely treatment and my vision has never been better!" - John S.</p>
      </div>
      <div className="education">
        <h2>Learn More About Cataracts</h2>
        <p><a href="#cataracts">What are Cataracts?</a></p>
        <p><a href="#symptoms">Symptoms</a></p>
        <p><a href="#treatments">Treatment Options</a></p>
        <p><a href="#prevention">Prevention Tips</a></p>
      </div>
      <div className="contact-cta">
        <h2>Get in Touch</h2>
        <p>Have questions or need to schedule an appointment? <a href="#contact">Contact us today!</a></p>
      </div>
    </section>
  );
};


export default Home