import React from 'react';
import Book from '../components/Book.jsx'; 
import '../components/Book.css';
import '../pages/Dashboard.css';
import {useState, useEffect} from 'react';

function Dashboard() {

const [books, setBooks] = useState([]);


useEffect(() => {
    const fetchBooks = async () => {
        try {
            const response = await fetch('https://openlibrary.org/search.json?q=programming&limit=10');
            const data = await response.json();
            setBooks(data.docs);
            console.log("Books loaded successfully:", data.docs);
        } 
        
        catch (error) {
            console.error("The publisher didn't answer:", error);
        }
    };

    fetchBooks();
}, []);

  return (
    <>
      <div className="welcome-section">
        <h1 className="head-title">Welcome to Safal's Book Library!📚</h1>
        <h1 className="head-title"><strong>Book Lists📖📖</strong></h1>
      </div>

<div className="main">
  {books.length > 0 ? (
    books.map((book) => (

      <Book 
        key={book.key} // 
        title={book.title} 
        image={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://via.placeholder.com/150"} 
      />
    ))
  ) : (
    <p>Loading the library...</p>
  )}
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