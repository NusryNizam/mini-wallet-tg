import { ChangeEvent, FormEvent, useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData); 
    navigate('../main')
  }

  return (
    <div className="Login">
      <h2 className="title">Login</h2>
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
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
      <small>
        Don't have an account?
        <br />
        <Link to="../signup">Create one</Link>
      </small>
    </div>
  )
}

export default Login
