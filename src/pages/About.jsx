import '../pages/Pages.css';
import React from 'react';
import '../pages/Dashboard.css';
import bookshelf from '../assets/bookshelf.jpg'


function About(){
    return(
        <>
<div className="about-page">
      <div className="about-container">
        <div className="about-content">
          <h1 className="section-title">About the Library</h1>
          <p className="about-text">
            Welcome to <strong>Safal's E-Book Library</strong>, a digital sanctuary for book lovers. 
            This project was built to provide a seamless, modern interface for discovering 
            timeless literature and contemporary hits.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <i className="fa-solid fa-bolt"></i>
              <span>Fast & Responsive</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-moon"></i>
              <span>Modern Dark UI</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-book-open"></i>
              <span>Curated Collection</span>
            </div>
          </div>
        </div>
        
        <div className="about-image">
        <img src={bookshelf} alt="Library Image" />
        </div>
      </div>
    </div>
  

     
      <div className="footer">
        <p className="footer-text">&copy; 2025 Safal Khanal. All rights reserved. </p>
        <div className="footer-icons">
            <a href="#" className="footer-icon"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Safal005" target="_blank" className="footer-icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" target="_blank" className="footer-icon"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="footer-icon"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="footer-icon"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </>
  );
}

export default About
