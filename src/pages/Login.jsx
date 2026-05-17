import {useState} from 'react';
import '../pages/Auth.css';
import { Link } from 'react-router-dom';
function Login(){
    
    const [showPassword, setShowPassword]=useState(false);
    
    
    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={(e) => e.preventDefault()}>
                    
                    <h1><i className="fa-solid fa-right-to-bracket"></i> Sign-in</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field' required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Password</label>
                        <div className='password-input-wrapper'>
                            <input type={showPassword? "text":"password"} placeholder='Password' className='input-field' required/>
                            <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`} onClick={() => setShowPassword(!showPassword)}></i>
                    </div>
                    </div>

                    <button type='submit' className='login-btn'>Login</button>
                    <div className='links-group'>
                        <p>Forgot Password? <Link to="/ForgotPassword">Click here!</Link></p>
                        <Link to="/SignUp" className='signup-login'>Sign-Up</Link>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Login