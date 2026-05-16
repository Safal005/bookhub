import '../pages/Login.css'
function Login(){
    return(
        <>
            <div className='login-wrap'>

                <form className='login-container' onSubmit={(e) => e.preventDefault()}>
                    <h1><i className="fa-solid fa-right-to-bracket"></i> Sign-in</h1>

                    <div className='input-group'>
                        <label htmlFor="username" className='user-pass'>Username</label>
                        <input type="text" placeholder='Username' className='input-field'/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password" className='user-pass'>Password</label>
                        <input type="password" placeholder='Password' className='input-field' />
                    </div>

                    <button type='submit' className='login-btn'>Login</button>
                    <div className='links-group'>
                        <p>Forgot Password? <a href="forgot-password.jsx">Click here!</a></p>
                        <a href="sign-up.jsx" className='signup-login'>Sign-Up</a>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Login