import { ChangeEvent, FormEvent, useState } from 'react'
import './ChangePassword.css'
import CustomButton from '../../components/CustomButton/CustomButton'

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div className="ChangePasswordForm">
      <h2 className="title">Change Password</h2>
      <form className="change-password-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            required
            onChange={(e) => handleInput(e)}
            value={formData.oldPassword}
          />
        </div>

        <div className="input-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            required
            onChange={(e) => handleInput(e)}
            value={formData.newPassword}
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmNewPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            required
            onChange={(e) => handleInput(e)}
            value={formData.confirmNewPassword}
          />
        </div>

        <br />
        <CustomButton isSubmitType={true}>Change Password</CustomButton>
      </form>
    </div>
  )
}

export default ChangePasswordForm
