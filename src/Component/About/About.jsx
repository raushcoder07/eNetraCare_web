import React from 'react';
import './AboutCSS.css';
import tree from '../../assets/images/tree-logo.png';
import society from '../../assets/images/society.jpg';
import Journey from './Journey';
import Card from './Card';
import abhay from './images/AbhayPic.jpg'
import swati from './images/swati-pic.jpeg'

const About = () => {
  return (
    <div className='about-container'>
      <div className='hero-container'>
        <h1 id='about-title'>About <span style={{ color: 'green' }}>eNetracare</span></h1>
        <p className='about-desc'><em>"Vision for All: Empowering Sight, Enabling Futures."</em></p>
      </div>

      <div>
        <img src="https://images.pexels.com/photos/7163354/pexels-photo-7163354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Employees" className='employees-img' />
        {/* <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident possimus ducimus tempora aut sint a. Distinctio maxime laudantium impedit velit rem aspernatur eaque a, at esse voluptas cumque accusamus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste vero nihil asperiores laboriosam cumque porro doloremque adipisci aperiam soluta! Quaerat obcaecati aliquid veritatis doloribus, molestiae mollitia quia consectetur qui modi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat quia, natus illum voluptatum ipsum exercitationem laboriosam maxime vel sapiente, aliquam numquam dolor. Quod, eaque eius mollitia necessitatibus laboriosam porro delectus, nam cupiditate culpa iste totam asperiores odit, excepturi deleniti? </p> */}
        <p className='info'>INNOVEASE INDIA PRIVATE LIMITED is a promising startup focusing on leveraging power of data and technology in healthcare sector. The Startup is registered as Private Limited Company registered under The Companies Act, 2013. Its registered office address is P NO 27 MOTI DOONGRI YOJANA GOVIND MARG Jaipur – Rajasthan, 302004. The startup intends to be the leading player in Eye Care Medical Services by using the capabilities of Information & Technology. With the vast experience of promoters in the field of Technology and Medical services in Eye Care Domain, the startup has developed an innovative product "eNetraCare" to Screen and detect cataract. Start up aims at  getting Medical Services in Eye Care Domain at doorstep.</p>
      </div>

      <hr style={{height:'1px'}}/>

      <div className="care-about">
        <div className="text-container">
          <h1 className='box-title'>What we care about</h1>
          <p className='box-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae itaque doloribus obcaecati culpa unde assumenda illum in quia, quasi ut dolor temporibus voluptas inventore dolorem ipsa tempore debitis quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, animi molestiae! Aliquid facilis ab odit officiis, perferendis maiores quis veniam rem repellendus iure at exercitationem deserunt labore dolorum fugit. Repudiandae.</p>
        </div>
        <div className="img-container">
          <img src={tree} alt="tree-growth" className='box-img' />
        </div>
      </div>

      <div className="company-journey">
        <h1 className='journey-title'>Journey of eNetracare</h1>
        <div className='journey-container'>
          <Journey />
        </div>
      </div>

      <div className="help-society">
        <div className="text-container">
          <h1 className='box-title'>How we plan on helping society</h1>
          <p className='box-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae itaque doloribus obcaecati culpa unde assumenda illum in quia, quasi ut dolor temporibus voluptas inventore dolorem ipsa tempore debitis quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, animi molestiae! Aliquid facilis ab odit officiis, perferendis maiores quis veniam rem repellendus iure at exercitationem deserunt labore dolorum fugit. Repudiandae.</p>
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
