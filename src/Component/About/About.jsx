import React from 'react';
import './AboutCSS.css';
import tree from '../../assets/images/tree-logo.png';
import society from '../../assets/images/society.jpg';
import Journey from './Journey';
import Card from './Card';

const About = () => {
  return (
    <div className='about-container'>
      <div className='hero-container'>
        <h1 id='about-title'>About <span style={{ color: 'green' }}>eNetracare</span></h1>
        <p className='about-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis nihil nisi mollitia consequuntur </p>
      </div>

      <div>
        <img src="https://images.pexels.com/photos/7163354/pexels-photo-7163354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Employees" className='employees-img' />
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident possimus ducimus tempora aut sint a. Distinctio maxime laudantium impedit velit rem aspernatur eaque a, at esse voluptas cumque accusamus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste vero nihil asperiores laboriosam cumque porro doloremque adipisci aperiam soluta! Quaerat obcaecati aliquid veritatis doloribus, molestiae mollitia quia consectetur qui modi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat quia, natus illum voluptatum ipsum exercitationem laboriosam maxime vel sapiente, aliquam numquam dolor. Quod, eaque eius mollitia necessitatibus laboriosam porro delectus, nam cupiditate culpa iste totam asperiores odit, excepturi deleniti? </p>
      </div>

      <hr />

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
        <h1 className='title'>Journey of eNetracare</h1>
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

      <div className="our-team">
        <h1 id='team-section-title' className='title'>Meet our team</h1>
        <div className="members">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default About;
