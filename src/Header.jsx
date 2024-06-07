import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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
            <li className="submenu" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <Link to="/resources">Patient Resources</Link>
              {dropdownVisible && (
                <ul className="submenu-items">
                  <li><Link to="/testimonials">Testimonials</Link></li>
                  <li><Link to="/information">Disorder</Link></li>
                  <li><Link to="/news">News</Link></li>
                  <li><Link to="/tips">Tips & Care</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
