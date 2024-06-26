import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { AntDesignOutlined, DownOutlined } from '@ant-design/icons';
import eNetraCareLogo from './assets/images/enetracareLogoedited.png'

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>
            <Link to="/" onClick={closeMenu}>
              {/* <AntDesignOutlined className="logo-icon" /> <span className="logo-text">eNetraCare</span> */}
              <img src={eNetraCareLogo} id='navbar-logo' /> 
              {/* <span className="logo-text">eNetraCare</span> */}
            </Link>
          </h1>
        </div>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
          &#9776; {/* Unicode for the hamburger icon */}
        </button>
        <nav className={`nav ${menuVisible ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            {/* <li><Link to="/ai-detection" onClick={closeMenu}>AI Detection</Link></li> */}
            {/* <li><Link to="/cataracts" onClick={closeMenu}>Cataracts</Link></li> */}
            <li 
              className="submenu" 
              onMouseEnter={toggleDropdown} 
              onMouseLeave={toggleDropdown}
            >
              <span className="submenu-link">
                <Link to="/resources" onClick={(e) => e.preventDefault()}>Patient Resources <DownOutlined className="dropdown-icon" /></Link>
              </span>
              {dropdownVisible && (
                <ul className="submenu-items">
                  {/* <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li> */}
                  <li><Link to="/information" onClick={closeMenu}>Disorder</Link></li>
                  <li><Link to="/news" onClick={closeMenu}>News</Link></li>
                  <li><Link to="/tips" onClick={closeMenu}>Tips & Care</Link></li>
                    <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/Testimonials" onClick={closeMenu}>Testimonials</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
