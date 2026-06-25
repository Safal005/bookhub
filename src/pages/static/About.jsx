import "./Pages.css";
import React from "react";
import bookshelf from "../../assets/bookshelf.jpg";

function About() {
  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <div className="about-content">
            <h1 className="section-title">About the Library</h1>
            <p className="about-text">
              Welcome to <strong>Safal's E-Book Library</strong>, a digital
              sanctuary for book lovers. This project was built to provide a
              seamless, modern interface for discovering timeless literature and
              contemporary hits.
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
    </>
  );
}

export default About;
