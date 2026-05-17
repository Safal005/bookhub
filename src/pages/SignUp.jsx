import { Link } from 'react-router-dom';
import { useState } from 'react';
function SignUp(){
    const [showPassword, setShowPassword]=useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={(e) => e.preventDefault()}>
                    <h1><i className="fa-solid fa-user-plus"></i> Sign-Up</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field' required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="number" className='user-pass'>Mobile Number</label>
                        <input type="tel" placeholder='e.g. +977-98XXXXXXXX' className='input-field' required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Password</label>
                        <div className='password-input-wrapper'>
                            <input type={showPassword? "text":"password"} placeholder='Password' className='input-field' required/>
                            <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`} onClick={() => setShowPassword(!showPassword)}></i>
                    </div>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Confirm Password</label>
                        <div className='password-input-wrapper'>
                            <input type={showConfirmPassword? "text":"password"} placeholder='Confirm Password' className='input-field' required/>
                            <i className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`} onClick={() => setShowConfirmPassword(!showConfirmPassword)}></i>
                    </div>
                    </div>

                    <button type='submit' className='login-btn'>Register</button>
                    <div className='links-group'>
                        <p>Forgot Password? <Link to="/ForgotPassword">Click here!</Link></p>
                        <Link to="/" className='signup-login'>Login</Link>
                    </div>

                </form>
            </div>
        </>

    )
}
export default SignUp