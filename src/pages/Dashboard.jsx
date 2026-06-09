import React from "react";
import Book from "../components/Book.jsx";
import "../components/Book.css";
import "../pages/Dashboard.css";
import { useState, useEffect } from "react";

function Dashboard() {
  const [topSellingBooks, setTopSellingBooks] = useState([]);
  const [storyBooks, setStoryBooks] = useState([]);
  const [scifiBooks, setSciFiBooks] = useState([]);
  const [historyBooks, setHistoryBooks] = useState([]);
  const [programmingBooks, setProgrammingBooks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {

        const [topRes, storyRes, scifiRes, historyRes, programmingRes] =
          await Promise.all([
            fetch("https://openlibrary.org/subjects/romance.json?limit=16"),
            fetch("https://openlibrary.org/subjects/fiction.json?limit=16"),
            fetch("https://openlibrary.org/subjects/science_fiction.json?limit=16"),
            fetch("https://openlibrary.org/subjects/history.json?limit=16"),
            fetch("https://openlibrary.org/subjects/computer_science.json?limit=16"),
          ]);

        const topData = await topRes.json();
        const storyData = await storyRes.json();
        const scifiData = await scifiRes.json();
        const historyData = await historyRes.json();
        const programmingData = await programmingRes.json();

        setTopSellingBooks(topData.works || []);
        setStoryBooks(storyData.works || []);
        setSciFiBooks(scifiData.works || []);
        setHistoryBooks(historyData.works || []);
        setProgrammingBooks(programmingData.works || []);
      } catch (error) {
        console.error("Something went wrong with the network delivery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCategories();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>
          <i className="fa-solid fa-spinner fa-spin-pulse fa-3x"></i>
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="welcome-section">
        <h1 className="head-title">
          {localStorage.getItem("username")
            ? `Welcome back! ${localStorage.getItem("username")}! 📚`
            : "Welcome to Bookhub! 📚"}
        </h1>
        <h1 className="head-title">
          <span>Explore our Library</span>
        </h1>
      </div>

      <div className="main">
        <div className="main-container">
          <h3> Our Top Selling </h3>
          <div className="books-grid">
            {topSellingBooks.map((book) => (
              <Book
                key={book.key}
                title={book.title}
                image={
                  book.cover_id
                    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                    : "https://via.placeholder.com/150?text=No+Cover"
                }
              />
            ))}
          </div>
        </div>

        <div className="main-container">
          <h3>Story </h3>
          <div className="books-grid">
            {storyBooks.map((book) => (
              <Book
                key={book.key}
                title={book.title}
                image={
                  book.cover_id
                    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                    : "https://via.placeholder.com/150?text=No+Cover"
                }
              />
            ))}
          </div>
        </div>

        <div className="main-container">
          <h3>History & Chronicles</h3>
          <div className="books-grid">
            {historyBooks.map((book) => (
              <Book
                key={book.key}
                title={book.title}
                image={
                  book.cover_id
                    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                    : "https://via.placeholder.com/150?text=No+Cover"
                }
              />
            ))}
          </div>
        </div>

        <div className="main-container">
          <h3>Sci-fi </h3>
          <div className="books-grid">
            {scifiBooks.map((book) => (
              <Book
                key={book.key}
                title={book.title}
                image={
                  book.cover_id
                    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                    : "https://via.placeholder.com/150?text=No+Cover"
                }
              />
            ))}
          </div>
        </div>

        <div className="main-container">
          <h3>Programming </h3>
          <div className="books-grid">
            {programmingBooks.map((book) => (
              <Book
                key={book.key}
                title={book.title}
                image={
                  book.cover_id
                    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                    : "https://via.placeholder.com/150?text=No+Cover"
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">
          &copy; 2025 Safal Khanal. All rights reserved.{" "}
        </p>
        <div className="footer-icons">
          <a href="#" className="footer-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Safal005"
            target="_blank"
            className="footer-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" target="_blank" className="footer-icon">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="footer-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Dashboard;