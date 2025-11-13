import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Visit Bangladesh</h3>
          <p>Your ultimate guide to exploring the beauty of Bangladesh</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#guides">Find Guides</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#emergency">Emergency Contacts</a></li>
            <li><a href="#hospitals">Hospitals</a></li>
            <li><a href="#police">Police Stations</a></li>
            <li><a href="#travel-tips">Travel Tips</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Visit Bangladesh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;