import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import About from "./pages/static/About.jsx";
import Review from "./pages/static/Review.jsx";
import Contact from "./pages/static/Contact.jsx";
import BookDescription from "./pages/dashboard/BookDescription.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import { useCart } from "./context/CartContext.jsx";
import { MainLayout } from "./components/layout/mainlayout.jsx";

function App() {
  const { toastMessage } = useCart();

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/book/:id" element={<BookDescription />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>

      {toastMessage && (
        <div className="global-toast-notification">
          <i className="fa-solid fa-circle-check"></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}

export default App;
