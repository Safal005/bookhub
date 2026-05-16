import React from 'react';
import Book from '../components/Book.jsx'; 
import '../components/Book.css';
import '../pages/Dashboard.css';
import threesixtyfive from '../assets/365.jpg';
import adaline from '../assets/adaline.jpg';
import diary from '../assets/diary.jpg';
import harrysorcerer from '../assets/harry.jpg';
import lettinggo from '../assets/lettinggo.jpeg';
import lionking from '../assets/lk.jpg';
import rdpd from '../assets/rdpd.jpg';

function Dashboard() {
  return (
    <>
      <div className="nav">
        <h1 className="nav-title">Welcome to Safal's Book Library!📚</h1>
      </div>
      <div className="header">
        <h1 className="head-title"><strong>Book Lists📖📖</strong></h1>
      </div>
      <div className="main">
        <Book image={threesixtyfive} title="365 Days" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={diary} title="The Diary of a Young Girl" />
        <Book image={harrysorcerer} title="Harry Potter and The Sorcerer Stone" />
        <Book image={lettinggo} title="Letting Go" />
        <Book image={lionking} title="Lion King" />
        <Book image={rdpd} title="Rich Dad Poor Dad" />
      </div>

      <div className="footer">
        <p className="footer-text">&copy; 2025 Safal Khanal. All rights reserved. </p>
        <a href="#" className="footer-icon"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Safal005" target="_blank" className="footer-icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" target="_blank" className="footer-icon"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="footer-icon"><i className="fa-brands fa-x"></i></a>
        <a href="#" className="footer-icon"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </>
  );
}

export default Dashboard;