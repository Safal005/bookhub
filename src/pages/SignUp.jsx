import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function SignUp(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate=useNavigate();
    const handleRegister =(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert('Passwords do not match!');
            return;
        }
        const userData={
            username:username,
            password:password
        };
        localStorage.setItem("registeredUser",JSON.stringify(userData));
        alert("Registration Successfull!")
        navigate("/");
    }
    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={handleRegister}>
                    <h1><i className="fa-solid fa-user-plus"></i> Sign-Up</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field' value={username} onChange={(e)=> setUsername(e.target.value)} required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="number" className='user-pass'>Mobile Number</label>
                        <input type="tel" placeholder='e.g. +977-98XXXXXXXX' className='input-field' required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Password</label>
                        <div className='password-input-wrapper'>
                            <input type={showPassword? "text":"password"} placeholder='Password' className='input-field' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`} onClick={() => setShowPassword(!showPassword)}></i>
                    </div>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Confirm Password</label>
                        <div className='password-input-wrapper'>
                            <input type={showConfirmPassword? "text":"password"} placeholder='Confirm Password' className='input-field' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required/>
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