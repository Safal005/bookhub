import {useState} from 'react';
import '../pages/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
function Login(){
    
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        const savedData = localStorage.getItem("registeredUser");
        if(savedData){
            const user= JSON.parse (savedData);
            if (user.username==username && user.password==password){
                alert('Login Successful!');
                navigate('/');
            }
            else{
                alert("Incorrect username and password!");
            }
        }
        else
            alert('No user found. Please Sign Up first!');
    };
    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={handleLogin}>
                    
                    <h1><i className="fa-solid fa-right-to-bracket"></i> Sign-in</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Password</label>
                        <div className='password-input-wrapper'>
                            <input type={showPassword? "text":"password"} placeholder='Password' className='input-field' value={password} onChange={(e) => setPassword(e.target.value)} required/>
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