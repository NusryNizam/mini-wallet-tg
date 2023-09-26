import CustomButton from '../../components/CustomButton/CustomButton'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/main')
    }

    return (
        <div className="Login">
            <h2 className='title'>Login</h2>
            <form className='login-form'>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <br />
                <CustomButton onClick={handleClick}>Login</CustomButton>
            </form>
            <br />
            <small>Don't have an account?
                <br />
                <Link to='../signup'>Create one</Link>
            </small>
        </div>
    )
}

export default Login