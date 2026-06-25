import React, { useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [isAdmin, setIsAdmin] = useState(false); 
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (isAdmin) {

            if (username === "admin" && password === "admin123") {
                alert('Admin Login Successful!');
                localStorage.setItem("username", "Admin");
                localStorage.setItem("role", "admin"); 
                navigate('/');
            } else {
                alert("Invalid Admin Credentials!");
            }
        } else {

            const savedData = localStorage.getItem("registeredUser");
            if (savedData) {
                const user = JSON.parse(savedData);
                if (user.username === username && user.password === password) {
                    alert('Login Successful!');
                    localStorage.setItem("username", user.username);
                    localStorage.setItem("role", "user");
                    navigate('/');
                } else {
                    alert("Incorrect username or password!");
                }
            } else {
                alert('No user found. Please Sign Up first!');
            }
        }
    };

    return (
        <div className='login-wrap'>
            <form className='login-container' onSubmit={handleLogin}>
            
                <div className="role-selector">
                    <button 
                        type="button" 
                        className={`role-btn ${!isAdmin ? 'active' : ''}`} 
                        onClick={() => setIsAdmin(false)}
                    >
                        <i className="fa-solid fa-circle-user"></i> User
                    </button>
                    <button 
                        type="button" 
                        className={`role-btn ${isAdmin ? 'active' : ''}`} 
                        onClick={() => setIsAdmin(true)}
                    >
                        <i className="fa-solid fa-shield-halved"></i> Admin
                    </button>
                </div>

                <h1>
                    <i className={isAdmin ? "fa-solid fa-user-gear" : "fa-solid fa-right-to-bracket"}></i> 
                    {isAdmin ? " Admin Sign-in" : " Sign-in"}
                </h1>

                <div className='input-group'>
                    <label htmlFor="username" className='user-pass'>Username</label>
                    <input 
                        type="text" 
                        placeholder={isAdmin ? 'Enter Admin ID' : 'Username'} 
                        className='input-field' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor="password" className='user-pass'>Password</label>
                    <div className='password-input-wrapper'>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder='Password' 
                            className='input-field' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                        <i 
                            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`} 
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
                </div>

                <button type='submit' className='login-btn'>
                    {isAdmin ? "Login as Administrator" : "Login"}
                </button>
                
                {!isAdmin && (
                    <div className='links-group'>
                        <p>Forgot Password? <Link to="/ForgotPassword">Click here!</Link></p>
                        <Link to="/SignUp" className='signup-login'>Sign-Up</Link>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Login;