import React from 'react';
import { useCart } from './CartContext.jsx';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page-wrapper">
      <div className="cart-header-container">
        <h2 className="cart-heading">Shopping Cart ({totalItems} items)</h2>
        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={clearCart}>
            <i className="fa-solid fa-trash-can"></i> Clear All
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty-message">
          <i className="fa-solid fa-basket-shopping fa-3x" style={{ color: '#333', marginBottom: '20px' }}></i>
          <p>Your cart is currently empty.</p>
          <Link to="/" className="cart-empty-link">Explore Books Here</Link>
        </div>
      ) : (
        <div className="cart-content-layout">
          <div className="cart-list-container">
            {cart.map((item) => {
              const itemImage = item.cover_id 
                ? `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg` 
                : "https://via.placeholder.com/150?text=No+Cover";

              return (
                <div key={item.key} className="cart-item-row">
                  <div className="cart-item-left">
                    <img src={itemImage} alt={item.title} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4>{item.title}</h4>
                      <p className="cart-item-key">ID: {item.key}</p>
                    </div>
                  </div>
                  
                  <div className="cart-item-controls">
                    <div className="quantity-control-group">
                      <button className="quantity-btn" onClick={() => updateQuantity(item.key, -1)}>-</button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button className="quantity-btn" onClick={() => updateQuantity(item.key, 1)}>+</button>
                    </div>
                    <button className="delete-item-btn" onClick={() => removeFromCart(item.key)} title="Remove Item">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-summary-panel">
            <h4>Order Summary</h4>
            <div className="summary-row">
              <span>Total Unique Books:</span>
              <span>{cart.length}</span>
            </div>
            <div className="summary-row">
              <span>Total Items Vol:</span>
              <span>{totalItems}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;