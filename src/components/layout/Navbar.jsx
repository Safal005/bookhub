import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

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
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setUsername("");
    setIsOpen(false);
    setIsMenuOpen(false);

    window.dispatchEvent(new Event("storage"));

    navigate("/");
  };

  return (
    <div className='navbar-containers'>
      <div className='logo-container'>
        <a href="/" className='logo'>Bookhub</a>
      </div>

      <div className='search-container'>
        <i className='fa-solid fa-magnifying-glass search-icon'></i>
        <input type="text" placeholder='Search Books...' />
      </div>

      <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>          
        <Link to="/" className='nav-links' onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/About" className='nav-links' onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/Review" className='nav-links' onClick={() => setIsMenuOpen(false)}>Review</Link>
        <Link to="/Contact" className='nav-links' onClick={() => setIsMenuOpen(false)}>Contact</Link>
        
        <Link to="/cart" className='nav-links nav-cart-link' onClick={() => setIsMenuOpen(false)}>
          <i className="fa-solid fa-shopping-cart"></i>
          {totalItems > 0 && (
            <span className="nav-cart-badge">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="mobile-account-links">
          {isLoggedIn ? (
            <>
              <span className="mobile-username">{username}</span>
              <button className='dropdown-login' onClick={handleLogout}>Logout</button>
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
                <p>{username}</p>
                <button className='dropdown-logout-btn' onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <p>Account</p>
                <Link to="/Login" className='dropdown-login' onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/SignUp" className='dropdown-register' onClick={() => setIsOpen(false)}>Register</Link>
              </>
            )}
          </div>
        )}    
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={`fa-solid ${isMenuOpen ? `fa-xmark` : `fa-bars`}`}></i>
      </div>
    </div>
  );
}

export default Navbar;