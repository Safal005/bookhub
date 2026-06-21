import React, { useState } from "react";
import "../pages/Pages.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thanks for reaching out, ${formData.name}! (Form logic to be added later)`,
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-info">
            <h1 className="section-title">Get in Touch</h1>
            <p className="contact-description">
              Have a question about a book or want to suggest a new feature?
              Drop me a message and We'll get back to you soon.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-envelope"></i>
                <span>safal005@github.com</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="How can We help you?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
