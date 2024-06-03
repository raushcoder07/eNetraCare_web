import React from 'react'
import "../App.css"

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
        <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:info@cataractswebsite.com">info@cataractswebsite.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
            <p>Address: 123 Vision Street, EyeCity, Country</p>
        </div>
        <div className="footer-section references">
            <h2>References</h2>
            <ul>
                <li><a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment">WHO on Cataracts</a></li>
                <li><a href="https://www.aao.org/eye-health/diseases/what-are-cataracts">AAO Cataract Information</a></li>
                <li><a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts">NEI on Cataracts</a></li>
            </ul>
        </div>
        <div className="footer-section additional-links">
            <h2>Additional Links</h2>
            <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Form</a></li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
                <p>&copy; 2024 EyeCare. All rights reserved.</p>
     </div>
</footer>
);
}

export default Footer