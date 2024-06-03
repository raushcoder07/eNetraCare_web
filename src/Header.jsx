import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>EyeCare AI</h1>
          <p className="tagline">AI-Powered Eye Health & Cataract Detection</p>
        </div>
        <nav className="nav">
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/ai-detection">AI Detection</Link></li>
            <li><Link to="/cataracts">Cataracts</Link></li>
            <li><Link to="/resources">Patient Resources</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        {/* <div className="header-right">
        </div> */}
      </div>
    </header>
  );
};

export default Header;
