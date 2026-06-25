import React from 'react';
import './Pages.css';

const REVIEWS = [
  { id: 1, name: "Suman Neupane", rating: 5, comment: "Best digital library interface I've used in Nepal. Very fast!" },
  { id: 2, name: "Aarav Sharma", rating: 4, comment: "The dark mode is perfect for late-night reading sessions." },
  { id: 3, name: "Priya KC", rating: 5, comment: "Love the collection! The UI is very professional and responsive." },
  { id: 4, name: "Rohan Das", rating: 4, comment: "Clean design. Can't wait for more books to be added!" },
];

function Review() {
  return (
    <>
      <div className="review-page">
        <div className="review-container">
          <h1 className="section-title">Reader Reviews</h1>
          <p className="review-subtitle">See what our community is saying about Safal's E-Book Library.</p>

          <div className="review-grid">
            {REVIEWS.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <i key={i} className="fa-regular fa-star"></i>
                  ))}
                </div>
                <p className="review-comment">"{review.comment}"</p>
                <h3 className="review-author">- {review.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default Review;