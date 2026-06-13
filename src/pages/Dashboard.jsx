import React, { useState, useEffect } from "react";
import Book from "../components/Book.jsx";
import "../components/Book.css";
import "../pages/Dashboard.css";

function Dashboard() {
  const [categories, setCategories] = useState({
    top: { name: "Our Top Selling", url: "accessible_book", visible: [], pool: [] },
    story: { name: "Thriller", url: "thriller", visible: [], pool: [] },
    history: { name: "History & Chronicles", url: "history", visible: [], pool: [] },
    scifi: { name: "Sci-fi", url: "science_fiction", visible: [], pool: [] },
    programming: { name: "Programming", url: "programming_languages", visible: [], pool: [] }
  });

  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [modalMode, setModalMode] = useState("");      
  const [isAdminUser, setIsAdminUser] = useState(localStorage.getItem("role") === "admin");
  const [currentUsername, setCurrentUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const keys = Object.keys(categories);
        const requests = keys.map(k => 
          fetch(`https://openlibrary.org/subjects/${categories[k].url}.json?limit=24`).then(r => r.json())
        );
        
        const results = await Promise.all(requests);
        
        setCategories(prev => {
          const updated = { ...prev };
          keys.forEach((key, i) => {
            const works = results[i].works || [];
            updated[key].visible = works.slice(0, 16);
            updated[key].pool = works.slice(16, 24);
          });
          return updated;
        });
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setLoading(false);
      }
    };

    const handleStorageChange = () => {
      setIsAdminUser(localStorage.getItem("role") === "admin");
      setCurrentUsername(localStorage.getItem("username") || "");
    };

    fetchAllCategories();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const openModal = (catKey, mode) => {
    setActiveModal(catKey);
    setModalMode(mode);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalMode("");
  };

  const handleAddBook = (catKey, bookIndex) => {
    setCategories(prev => {
      const cat = { ...prev[catKey] };
      const selectedBook = cat.pool[bookIndex];
      cat.pool = cat.pool.filter((_, i) => i !== bookIndex);
      cat.visible = [...cat.visible, selectedBook];
      return { ...prev, [catKey]: cat };
    });
    closeModal();
  };

  const handleDeleteBook = (catKey, bookIndex) => {
    setCategories(prev => {
      const cat = { ...prev[catKey] };
      const selectedBook = cat.visible[bookIndex];
      cat.visible = cat.visible.filter((_, i) => i !== bookIndex);
      cat.pool = [...cat.pool, selectedBook]; 
      return { ...prev, [catKey]: cat };
    });
    closeModal();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p><i className="fa-solid fa-spinner fa-spin-pulse fa-3x"></i></p>
      </div>
    );
  }

  return (
    <>
      <div className="welcome-section">
        <h1 className="head-title">
          {currentUsername
            ? `Welcome back, ${currentUsername}! 📚`
            : "Welcome to Bookhub! 📚"}
        </h1>
        <h1 className="head-title"><span>Explore our Library</span></h1>
      </div>

      <div className="main">
        {Object.keys(categories).map((key) => {
          const cat = categories[key];
          return (
            <div className="book-container" key={key}>
              <div className="category-header-wrap">
                <h3>{cat.name}</h3>
                {isAdminUser && (
                  <div className="admin-actions">
                    <button 
                      className="admin-btn add-btn" 
                      onClick={() => openModal(key, "add")}
                      disabled={cat.pool.length === 0}
                    >
                      <i className="fa-solid fa-plus"></i> Add Book
                    </button>
                    <button 
                      className="admin-btn delete-btn" 
                      onClick={() => openModal(key, "delete")}
                      disabled={cat.visible.length === 0}
                    >
                      <i className="fa-solid fa-trash-can"></i> Delete Book
                    </button>
                  </div>
                )}
              </div>
              <div className="books-grid">
                {cat.visible.map((book) => (
                  <Book
                    key={book.key}
                    title={book.title}
                    releaseYear={book.first_publish_year || "Unknown"}
                    image={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : "https://via.placeholder.com/150?text=No+Cover"}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>
                Select a Book to {modalMode === "add" ? "Add" : "Delete"} ({categories[activeModal].name})
              </h4>
              <button className="close-modal-btn" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-pool-grid">
              {(modalMode === "add" ? categories[activeModal].pool : categories[activeModal].visible).map((book, index) => (
                <div 
                  className={`pool-item-card ${modalMode === "delete" ? "delete-card-hover" : ""}`} 
                  key={book.key} 
                  onClick={() => modalMode === "add" ? handleAddBook(activeModal, index) : handleDeleteBook(activeModal, index)}
                >
                  <img 
                    src={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : "https://via.placeholder.com/150?text=No+Cover"} 
                    alt={book.title} 
                  />
                  <h5>{book.title}</h5>
                  <p>{book.first_publish_year || "Unknown Year"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="footer">
        <p className="footer-text">&copy; 2026 Safal Khanal. All rights reserved.</p>
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