import { Link } from 'react-router-dom';

function SignUp(){
    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={(e) => e.preventDefault()}>
                    <h1><i className="fa-solid fa-user-plus"></i> Sign-Up</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field'/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="number" className='user-pass'>Mobile Number</label>
                        <input type="tel" placeholder='e.g. +977-98XXXXXXXX' className='input-field' />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Password</label>
                        <input type="password" placeholder='Password' className='input-field' />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="confirm-password" className='user-pass'>Confirm Password</label>
                        <input type="password" placeholder='Confirm Password' className='input-field' />
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