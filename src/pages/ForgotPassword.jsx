import { Link } from 'react-router-dom';
import { useState } from 'react';


function ForgotPassword(){
    
    const [number,setNumber]=useState("");
    const handleSendOTP=(e)=>{
        e.preventDefault();
        const nepaliNumberPattern=/^(98|97)\d{8}$/;
        if(nepaliNumberPattern.test(number)){
            alert("OTP has been sent to: "+number);

        }
        else{
            alert("Invalid Number! Please enter a 10-digit Nepali number starting with 98 or 97.");
        }
    };


    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={handleSendOTP}>
    
                    <h1><i className="fa-solid fa-key"></i> Reset Password</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field' required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="number" className='user-pass'>Mobile Number</label>
                        <input type="tel" placeholder='e.g. +977-98XXXXXXXX' className='input-field' value={number} onChange={(e)=>setNumber(e.target.value)} required/>
                    </div>
                

                    <button type='submit' className='login-btn'>Send OTP</button>
                    <div className='links-group'>
                        <Link to="/SignUp" className='signup-login'>Sign-Up</Link>
                        <Link to="/" className='signup-login'>Login</Link>
                    </div>

                </form>
            </div>
        </>



    )
}
export default ForgotPassword