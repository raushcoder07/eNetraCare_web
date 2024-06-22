import React from 'react'
import '../App.css'
import Image_sli from './Image_sli';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero" style={{position:'relative'}}>
        <Image_sli/>
        {/* <h1 style={{position:'absolute', zIndex:1, top:'30%', left:'10%', color:'white', fontSize:'3.5rem'} } id='typewriter-text' >Welcome to eNetraCare</h1> */}
        <div class="typed-out" style={{position:'absolute', zIndex:1, top:'30%', left:'10%', color:'white', fontSize:'3.5rem', width:'50%'} }>Welcome to eNetraCare</div>
        
      </div>
      <div className="intro">
        <h2>AI-Powered Cataract Detection</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo obcaecati autem eius repellat esse ullam dignissimos cum quae, quas quod at non nostrum. Reprehenderit cupiditate beatae doloribus tempore aspernatur velit commodi, officiis placeat fugiat expedita fuga, dicta et, esse itaque.</p>
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