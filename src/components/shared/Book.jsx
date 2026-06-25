import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./Book.css";

function Book({
  bookkey,
  image,
  title = "Untitled Book",
  releaseYear = "2024",
}) {
  const { addToCart } = useCart();
  const fallbackImage = "https://via.placeholder.com/150?text=No+Cover";

  const randomRating = useMemo(
    () => (Math.random() * (10 - 8) + 8).toFixed(1),
    [],
  );

  const cleanKey = bookkey ? bookkey.replace("/works/", "") : "";

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    addToCart({
      key: cleanKey,
      title: title,
      cover_id:
        image && image.includes("covers.openlibrary.org")
          ? image.split("/id/")[1]?.split("-")[0]
          : null,
    });
  };

  return (
    <Link to={`/book/${cleanKey}`} className="Book">
      <div className="Book-card-wrap">
        <img src={image || fallbackImage} alt={title} className="Book-img" />
        <div className="Book-overlay">
          <div className="Book-top-badges">
            <button
              className="badge-cart"
              onClick={handleAddToCart}
              title="Add to Cart"
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
            <span className="badge-rating">
              <i className="fa-solid fa-star"></i> {randomRating}
            </span>
          </div>
          <div className="Book-metadata">
            <h4 className="Book-hover-title">{title}</h4>
            <span className="Book-subtext">{releaseYear}</span>
          </div>
        </div>
      </div>
      <div className="Book-info-block">
        <h4 className="Book-title-text" title={title}>
          {title}
        </h4>
        <span className="Book-subtext">{releaseYear}</span>
      </div>
    </Link>
  );
}

export default Book;
