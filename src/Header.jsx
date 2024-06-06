import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>EyeCare AI</h1>
          <p className="tagline">AI-Powered Eye Health & Cataract Detection</p>
        </div>
        <nav className="nav">
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="services">
              <Link to="/services">Services</Link>
            </Menu.Item>
            <Menu.Item key="ai-detection">
              <Link to="/ai-detection">AI Detection</Link>
            </Menu.Item>
            <Menu.Item key="cataracts">
              <Link to="/cataracts">Cataracts</Link>
            </Menu.Item>

            <SubMenu key="patient-resource" title="Patient Resource">
              <Menu.Item key="resources">
                <Link to="/resources">Testimonials</Link>
              </Menu.Item>
              <Menu.Item key="resources">
                <Link to="/resources">Information</Link>
              </Menu.Item>
              <Menu.Item key="resources">
                <Link to="/resources">News</Link>
              </Menu.Item>
              <Menu.Item key="resources">
                <Link to="/resources">Eye Care tips</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="contact">
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
          </Menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
