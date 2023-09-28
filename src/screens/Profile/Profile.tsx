import { Outlet, useNavigate } from 'react-router-dom'
import './Profile.css'
import { useContext, useEffect } from 'react'
import { TelegramContext } from '../../context/TelegramContext'

const Profile = () => {
  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)

  useEffect(() => {
    setNavigationPath('/')
    Telegram.BackButton.show().onClick(goBack)
    Telegram.MainButton.hide()
  }, [navigateTo])

  const goBack = () => {
    navigate(-1)
  }

  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
  }

  const changePassword = () => {
    navigate('change-password')
  }
  return (
    <div className="Profile">
      <h2 className="title">Profile</h2>
      <div className="input-group">
        <label>Your email</label>
        <div className="email">jonhdoe@email.com</div>
      </div>
      <div className="pressables">
        <button onClick={changePassword}>Change Password</button>
        <button onClick={logout}>Logout</button>
      </div>
      <Outlet />
    </div>
  )
}

export default Profile
