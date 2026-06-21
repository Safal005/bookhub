import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/Forgotpassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Review from "./pages/Review.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import BookDescription from "./pages/BookDescription.jsx";
import CartPage from "./pages/CartPage.jsx";
import { MainLayout } from "./layout/mainlayout.jsx";
import { useCart } from "./pages/CartContext.jsx";

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
