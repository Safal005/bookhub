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
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }

    const handleOutsideClick = (e) => {
      const isTrigger = e.target.closest('.profile-trigger');
      const isMenu = e.target.closest('.dropdown-menu');
      if (!isTrigger && !isMenu) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className='navbar-containers'>
        <div className='logo-container'>
          <Link to="/" className='logo'>Safal's E Book</Link>
        </div>

        <div className='search-container'>
          <i className='fa-solid fa-magnifying-glass search-icon'></i>
          <input type="text" placeholder='Search Books...' />
        </div>

        <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>          
          <Link to="/Home" className='nav-links' onClick={()=> setIsMenuOpen(false)}>Home</Link>
          <Link to="/About" className='nav-links' onClick={()=> setIsMenuOpen(false)}>About</Link>
          <Link to="/Review" className='nav-links' onClick={()=> setIsMenuOpen(false)}>Review</Link>
          <Link to="/Contact" className='nav-links' onClick={()=> setIsMenuOpen(false)}>Contact</Link>
        

        <div className="mobile-account-links">
          {isLoggedIn ? (
            <>
              <span className="mobile-username">{username}</span>
              <button className='dropdown-login' onClick={() => { handleLogout(); setIsMenuOpen(false);}}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/Login" className='dropdown-login' onClick={() => setIsMenuOpen(false)}>Login</Link>
              <Link to="/SignUp" className='dropdown-register' onClick={() => setIsMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
        </div>
        <div className='profile-dropdown'>
          <button className='profile-trigger' onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-circle-user"></i>
          </button>
          
        {isOpen && (
          <div className={`dropdown-menu ${isLoggedIn ? 'logged-in' : ''}`}>
            {isLoggedIn ? (
              <>
                <p >{username}</p>
                <Link to="/" className='dropdown-login' onClick={() => { handleLogout(); setIsOpen(false); }}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <p>Account</p>
                <Link to="/Login" className='dropdown-login'>Login</Link>
                <Link to="/SignUp" className='dropdown-register'>Register</Link>
              </>
            )}
          </div>
        )}    
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen) }>
          <i className= {`fa-solid ${isMenuOpen ? `fa-xmark` :`fa-bars`}`}></i>
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

export default Dashboard;