import React from 'react';
import './AboutCSS.css';
import tree from '../../assets/images/tree-logo.png';
import society from '../../assets/images/society.jpg';
import Journey from './Journey';
import Card from './Card';
import abhay from './images/AbhayPic.jpg'
import swati from './images/swati-pic.jpeg'
import milestone from './images/milestone-icon.svg'

const About = () => {
  return (
    <div className='about-container'>

      <div className='hero-container'>
        <h1 id='about-title'>About <span style={{ color: 'green' }}>eNetraCare</span></h1>
        <p className='about-desc'><em>"Vision for All: Empowering Sight, Enabling Futures."</em></p>
      </div>

      <div>
        <img src="https://images.pexels.com/photos/7163354/pexels-photo-7163354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Employees" className='employees-img' />
        <p className='info'>eNetraCare by Innovease India Private Limited offers an affordable, portable eye care solution that brings vision testing and cataract screening to patients' doorsteps. Using a mobile app integrated with an  AI-based  Software,   We  address  challenges   like transportation,  healthcare  worker  availability  and  data  precision, focusing on underserved rural and slum areas in India.</p>
      </div>

      <hr style={{height:'1px'}}/>

      {/* <div className="care-about">
        <div className="text-container">
          <h1 className='text-box-title'>What we care about</h1>
          <p className='text-box-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae itaque doloribus obcaecati culpa unde assumenda illum in quia, quasi ut dolor temporibus voluptas inventore dolorem ipsa tempore debitis quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, animi molestiae! Aliquid facilis ab odit officiis, perferendis maiores quis veniam rem repellendus iure at exercitationem deserunt labore dolorum fugit. Repudiandae.</p>
        </div>
        <div className="img-container">
          <img src={tree} alt="tree-growth" className='box-img' />
        </div>
      </div> */}

      <div className="company-milestones">
        <div className='milestone-title-container'>
        <h1 className='milestones-title'>Milestones</h1> 
        <img src={milestone} className='milestone-icon' />
        </div>
        
        <div className='milestones-container'>
          <Journey />
        </div>
      </div>

      <div className="help-society">
        <div className="text-container">
          <h1 className='box-title'>How we plan on helping society</h1>
          <p className='box-desc'>At Innovease India Private Limited, we develop eNetraCare, a cost- effective, portable eye care solution that provides vision testing and cataract screening at the patient's doorstep. Our system integrates a user-friendly mobile app with an AI-powered screening device to deliver precise and accessible eye care, targeting underserved rural and  slum  populations  across  India.  By  addressing  key  challenges such as transportation, availability of trained healthcare workers, and data accuracy, we aim to revolutionize eye care accessibility and efficiency.</p>
        </div>
        <div className="img-container">
          <img src={society} alt="Helping society" className='box-img' />
        </div>
      </div>

      <hr style={{height:'1px'}}/>

      <div className="our-team">
        <h1 id='team-section-title' >Meet our team</h1>
        <div className="members">
          <Card
            name="Abhay Bhamaikar"
            designation='Co-founder, Innovease India Private Limited.'
            qualification='Qualification: B.E (Computer Engineering)  &  M.E (Information Technology)'
            workStatus='Proprietor of 2 Business Entities.'
            workExperience='Teaching Experience of 7 Years in Engineering College.'
            research='Research: Publications in 4 International Journals.'
            imgSrc={abhay}
          />
          <Card
            name="Dr. Swati Tomar "
            designation='Co-founder, Innovease India Private Limited.'
            qualification='Qualification: M.B.B.S, MS (Ophthalmology) & Former Fellow and Adjunct Faculty LVPEI. '
            workStatus='Consultant and Proprietor of Eye Hospital.'
            workExperience='Teaching Experience of 20 Years in Medical College.'
            research='Research: Publications in 13 International Journals.'
            imgSrc={swati}
          />
          {/* <Card /> */}
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
