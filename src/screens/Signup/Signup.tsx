import { Link, useNavigate } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'
import './Signup.css'
import { ChangeEvent, Context, useContext, useEffect, useState } from 'react'
import { TelegramContext } from '../../context/TelegramContext'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import apiUrl from '../../utils/base'
import { AuthContext, AuthContextType } from '../../context/AuthContext'

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()
  let { setToken } = useContext<AuthContextType>(AuthContext as Context<AuthContextType>)
  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)

  useEffect(() => {
    Telegram.BackButton.show().onClick(goBack)
    setNavigationPath('/main/dashboard')
    Telegram.MainButton.show()
      .enable()
      .setText('Signup')
      .onClick(() => handleSubmit('/main/dashboard'))
  }, [])

  function goBack() {
    navigate(-1)
  }

  const handleSubmit = (path: string) => {
    console.log(formData, navigateTo)
    // navigate(path)
    console.log(path)
    if(formData.name === '' || formData.email === '' || formData.password === '') {
      Telegram.showAlert('Please make sure all the fields are filled')
      return
    }
    setIsLoading(true)

    axios
      .post(
        `${apiUrl}/signup`,
        {
          displayName: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => {
        setToken(res.data.token)
        toast.success('Success!')
        toast('Redirecting to login.. Please wait')
        setTimeout(() => {
          navigate('/login')
        }, 4000)
        console.log('Success!')
        setFormData({
          name: '',
          email: '',
          password: '',
        })
      })
      .catch((err) => {
        toast.error(`Error: ${err.response.data.error}`)
        console.log(err.response.data.error)
      })
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="Signup">
      <h2 className="title">Signup</h2>
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit('/main/dashboard')
        }}
      >
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => handleInput(e)}
            value={formData.name}
          />
        </div>
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
          <label htmlFor="password">Password</label>
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
        <CustomButton isLoading={isLoading} isSubmitType={true}>Signup</CustomButton>
      </form>
      <br />
      <small className="small-text">
        Already have an account?
        <br />
        <Link to="/login">Login</Link>
      </small>
      <ToastContainer position="top-right" />
    </div>
  )
}

export default Signup
