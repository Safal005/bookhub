import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  
  const [isOpen,setIsOpen] = useState(false);
  useEffect(()=>{
    const handleOutsideClick =(e) =>{
      if(!e.target.closest('.profile-trigger')){
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown',handleOutsideClick);
    return() =>{
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  },[]);


  return (
    <>
      <div className='navbar-containers'>
      <div className='logo-container'>
        <Link to="/Login" className='logo'>Safal's E Book</Link>
      </div>

      <div className='search-container'>
        <i className='fa-solid fa-magnifying-glass search-icon'></i>
        <input type="text" placeholder='Search Books...' />
      </div>

      <div className='nav-links-container'>
        <Link to="/Home" className='nav-links'>Home</Link>
        <Link to="/About" className='nav-links'>About</Link>
        <Link to="/Review" className='nav-links'>Review</Link>
        <Link to="/Contact" className='nav-links'>Contact</Link>
      </div>

      <div className='profile-dropdown'>
          <button className='profile-trigger'  onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-circle-user"></i>
          </button>
          { isOpen&&(
          <div className='dropdown-menu'>
            <p>Account</p>
            <Link to="/login" className='dropdown-login'>Login </Link>
            <Link to="/SignUp" className='dropdown-register'>Register</Link>
          </div>
          )}
        </div>
      </div>






      <div className="welcome-section">
        <h1 className="head-title">Welcome to Safal's Book Library!📚</h1>
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
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />
        <Book image={adaline} title="The Age of Adaline" />

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