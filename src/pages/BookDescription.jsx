import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookDescription.css";

function BookDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await res.json();

        let descriptionText = "No description available for this book.";
        if (data.description) {
          if (typeof data.description === "string") {
            descriptionText = data.description;
          } else if (data.description.value) {
            descriptionText = data.description.value;
          }
        }

        setBook({
          title: data.title,
          description: descriptionText,
          year: data.first_publish_date || "Unknown",
          cover: data.covers && data.covers.length > 0
            ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
            : "https://via.placeholder.com/300?text=No+Cover"
        });
      } catch (err) {
        console.error("Error loading details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p><i className="fa-solid fa-spinner fa-spin-pulse fa-3x"></i></p>
      </div>
    );
  }

  return (
    <div className="description-main">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Library
      </button>

      {book && (
        <div className="details-container">
          <div className="details-cover-box">
            <img src={book.cover} alt={book.title} />
          </div>
          <div className="details-info-box">
            <h2>{book.title}</h2>
            <p className="details-year"><strong>Published Year:</strong> {book.year}</p>
            <div className="details-summary">
              <h3>Description</h3>
              <p>{book.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDescription;