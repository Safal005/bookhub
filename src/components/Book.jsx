import React from "react";
import "./Book.css";
import { useMemo } from "react";

function Book({ image, title = "Untitled Book" }) {
  const fallbackImage = "https://via.placeholder.com/150?text=No+Cover";
  const randomRating = useMemo(() => (Math.random() * (10 - 8) + 8).toFixed(1), []);
  const handleAddToCart = (e) => {
    e.stopPropagation();
    alert(`Added ${title} to cart`);
  };

  return (
    <div className="Book">
      <img 
        src={image || fallbackImage} 
        alt={title} 
        className="Book-img" 
      />

      <div className="Book-top-badges">
        <button className="badge-cart" onClick={handleAddToCart} title="Add to Cart">
          <i className="fa-solid fa-cart-plus"></i>
        </button>
        
        <span className="badge-rating">
          <i className="fa-solid fa-star"></i> {randomRating}
        </span>
      </div>

      <div className="Book-overlay">
        <div className="Book-metadata">
          <h4 className="Book-hover-title">{title}</h4>
          <span className="Book-subtext">Ed. Edition</span>
        </div>
      </div>
    </div>
  );
}

export default Book;