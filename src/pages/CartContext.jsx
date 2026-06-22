import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [toastMessage, setToastMessage] = useState("");
  const [categories, setCategories] = useState({
    top: { name: "Our Top Selling", url: "accessible_book", visible: [], pool: [] },
    story: { name: "Thriller", url: "thriller", visible: [], pool: [] },
    history: { name: "History & Chronicles", url: "history", visible: [], pool: [] },
    scifi: { name: "Sci-fi", url: "science_fiction", visible: [], pool: [] },
    programming: { name: "Programming", url: "programming_languages", visible: [], pool: [] }
  });
  const [apiLoading, setApiLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("bookhub_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookhub_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (hasFetched) return;

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
        setHasFetched(true);
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setApiLoading(false);
      }
    };

    fetchAllCategories();
  }, [hasFetched]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.key === book.key);
      
      setToastMessage(`"${book.title}" added to cart!`);
      setTimeout(() => setToastMessage(""), 3000);

      if (existingItem) {
        return prevCart.map((item) =>
          item.key === book.key ? { ...item, quantity: item.quantity + 1 } : item
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
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, updateQuantity, clearCart, 
      toastMessage, categories, setCategories, apiLoading, hasFetched 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}