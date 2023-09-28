import { Link, useNavigate } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'
import './Signup.css'
import { ChangeEvent, FormEvent, useState } from 'react'

const Signup = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    navigate('../main')
  }

  return (
    <div className="Signup">
      <h2 className="title">Signup</h2>
      <form className="signup-form" onSubmit={e => handleSubmit(e)}>
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
        <CustomButton isSubmitType={true}>Signup</CustomButton>
      </form>
      <br />
      <small className='small-text'>
        Already have an account?
        <br />
        <Link to="/login">Login</Link>
      </small>
    </div>
  )
}

export default Signup
