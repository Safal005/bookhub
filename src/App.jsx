import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPassword from './pages/Forgotpassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Review from './pages/Review.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './pages/Navbar.jsx'; 

function NavbarWrapper() {
  const location = useLocation();
  const authPaths = ['/Login', '/SignUp', '/ForgotPassword'];
  
  if (authPaths.includes(location.pathname)) return null;
  
  return <Navbar />;
}

function App() {
  return (
    <>
      <NavbarWrapper />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Review" element={<Review/>} />
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;