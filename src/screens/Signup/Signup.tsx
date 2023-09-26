import CustomButton from '../../components/CustomButton/CustomButton'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('../login')
    }


    return (
        <div className="Signup">
            <h2 className='title'>Signup</h2>
            <form className='signup-form'>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <br />
                <CustomButton onClick={handleClick}>Signup</CustomButton>
            </form>
            <br />
            <small>Already have an account?
                <br />
                <Link to='../login'>Login</Link>
            </small>
        </div>
    )
}

export default Signup