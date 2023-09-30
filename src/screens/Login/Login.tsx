import { ChangeEvent, Context, useContext, useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { TelegramContext } from '../../context/TelegramContext'
import { ToastContainer } from 'react-toastify'
import { AuthContext, AuthContextType } from '../../context/AuthContext'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)
  const { login } = useContext<AuthContextType>(
    AuthContext as Context<AuthContextType>
  )

  useEffect(() => {
    Telegram.BackButton.show().onClick(goBack)
    setNavigationPath('/main/dashboard')
    // Telegram.MainButton.show()
    //   .enable()
    //   .setText('Login')
    //   .onClick(() => handleSubmit('/main/dashboard'))
    Telegram.MainButton.disable()
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
    // navigate(path)
    console.log(path)

    if(formData.email === '' || formData.password === '') {
      Telegram.showAlert('Please make sure to all the fields are filled')
      return
    }

    setIsLoading(true)
    login(formData)

    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }

  return (
    <div className="Login">
      <h2 className="title">Login</h2>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit('/main/dashboard')
        }}
      >
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
        <CustomButton isLoading={isLoading} isSubmitType={true}>Login</CustomButton>
      </form>
      <br />
      <small className="small-text">
        Don't have an account?
        <br />
        <Link to="/signup">Create one</Link>
      </small>
      <ToastContainer position="top-right" />
    </div>
  )
}

export default Login
