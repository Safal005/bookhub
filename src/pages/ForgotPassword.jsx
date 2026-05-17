import { Link } from 'react-router-dom';
function ForgotPassword(){
    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={(e) => e.preventDefault()}>
                    <h1><i className="fa-solid fa-key"></i> Reset Password</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field'/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="number" className='user-pass'>Mobile Number</label>
                        <input type="tel" placeholder='e.g. +977-98XXXXXXXX' className='input-field' />
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