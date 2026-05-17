import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPassword from './pages/Forgotpassword.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;