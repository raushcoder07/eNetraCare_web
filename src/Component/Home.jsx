import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero">
        <h1>Welcome to EyeCare AI</h1>
        <p>Revolutionizing eye health with AI technology for early cataract detection and treatment.</p>
        <button className="cta-btn">Book an Appointment</button>
      </div>
      <div className="intro">
        <h2>AI-Powered Cataract Detection</h2>
        <p>Our advanced AI technology helps in the early detection of cataracts, ensuring timely treatment and better eye health outcomes.</p>
      </div>
      <div className="about-eye-health">
        <h2>About Eye Health</h2>
        {/* <img src={eyeHealthImage} alt="Eye Health" className="eye-health-image" /> */}
        <p>Maintaining good eye health is crucial for overall well-being. Regular eye exams can detect problems early, and advances in AI technology like ours can help identify issues such as cataracts even sooner.</p>
      </div>
      <div className="services">
        <h2>Our Services</h2>
        <ul>
          <li>AI Cataract Detection</li>
          <li>Cataract Surgery</li>
          <li>Comprehensive Eye Exams</li>
          <li>Post-Surgery Care</li>
        </ul>
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