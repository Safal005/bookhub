import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Support</a>
        </div>

        <div className="footer-icons">
          <a href="#" className="footer-icon"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Safal005" target="_blank" className="footer-icon" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="#" target="_blank" className="footer-icon" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="footer-icon"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" className="footer-icon"><i className="fa-brands fa-instagram"></i></a>
        </div>

        <p className="footer-text">&copy; 2026 BookHub. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;