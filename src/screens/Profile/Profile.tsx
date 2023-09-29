import { Outlet } from 'react-router-dom'
import { Context, useContext, useEffect } from 'react'
import { TelegramContext } from '../../context/TelegramContext'
import { AuthContext, AuthContextType } from '../../context/AuthContext'
import './Profile.css'

const Profile = () => {
  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)
  const { logout } = useContext<AuthContextType>(
    AuthContext as Context<AuthContextType>
  )
  useEffect(() => {
    setNavigationPath('/')
    Telegram.BackButton.hide()
    Telegram.MainButton.hide()
  }, [navigateTo])

  // const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  // const changePassword = () => {
  //   navigate('change-password')
  // }
  return (
    <div className="Profile">
      <h2 className="title">Profile</h2>
      <div className="input-group">
        <label>Your email</label>
        <div className="email">jonhdoe@email.com</div>
      </div>
      <div className="pressables">
        {/* <button onClick={changePassword}>Change Password</button> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Outlet />
    </div>
  )
}

export default Profile
