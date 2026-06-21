import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [toastMessage, setToastMessage] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("bookhub_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookhub_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.key === book.key);

      setToastMessage(`"${book.title}" added to cart!`);
      setTimeout(() => setToastMessage(""), 3000);

      if (existingItem) {
        return prevCart.map((item) =>
          item.key === book.key
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookKey) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== bookKey));
  };

  const updateQuantity = (bookKey, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.key === bookKey) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
