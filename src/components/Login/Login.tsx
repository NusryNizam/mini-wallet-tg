import './Login.css'

const Login = () => {
  return (
    <div className="Login">
        <h2 className='title'>Login</h2>
        <form className='login-form'>
            <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <br />
            <button type="submit" className="btn">Login</button>
        </form>
        <small>Don't have an account?
            <br />
            <a href="#">Create one</a>
        </small>
    </div>
  )
}

export default Login