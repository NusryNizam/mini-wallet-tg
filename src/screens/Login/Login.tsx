import { ChangeEvent, useContext, useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { TelegramContext } from '../../context/TelegramContext'

const Login = () => {
  const navigate = useNavigate()
  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)

  useEffect(() => {
    Telegram.BackButton.show().onClick(goBack)
    setNavigationPath('/main/dashboard')
    Telegram.MainButton.show().enable().setText('Login').onClick(( ) => handleSubmit('/main/dashboard'))
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  function goBack() {
    navigate(-1)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (path: string) => {
    console.log(formData, navigateTo)
    navigate(path)
  }

  return (
    <div className="Login">
      <h2 className="title">Login</h2>
      <form className="login-form" onSubmit={() => handleSubmit('main/dashboard')}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => handleInput(e)}
            value={formData.email}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => handleInput(e)}
            value={formData.password}
          />
        </div>
        <br />
        <CustomButton isSubmitType={true}>Login</CustomButton>
      </form>
      <br />
      <small className="small-text">
        Don't have an account?
        <br />
        <Link to="/signup">Create one</Link>
      </small>
    </div>
  )
}

export default Login
