import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'
import image from '../../assets/images/image.png'
import logo from '../../assets/images/mini-wallet-logo.png'
import './Onboarding.css'
import { Context, useContext, useEffect } from 'react'
import { TelegramContext } from '../../context/TelegramContext'
import { AuthContext, AuthContextType } from '../../context/AuthContext'

const Onboarding = () => {
  let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)
  const { isAuthenticated } = useContext<AuthContextType>(
    AuthContext as Context<AuthContextType>
  )
  
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main/dashboard')
    }
  }, [])
  
  useEffect(() => {
    Telegram.enableClosingConfirmation()
    setNavigationPath('/login')
    Telegram.BackButton.hide()
    // Telegram.MainButton.show()
    //   .enable()
    //   .setText('Get Started')
    //   .onClick(() => handleClick('/login'))
    Telegram.MainButton.disable()
  }, [navigateTo])

  const handleClick = (path: string) => {
    navigate(path)
  }
  return (
    <div className="Onboarding">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="main-image-container">
        <img src={image} alt="" />
      </div>
      <section className="tagline">
        <h3>
          Manage and visualize your day-to-day finances inside Telegram without
          the hassle
        </h3>
        <CustomButton onClick={() => handleClick('/login')}>
          Get Started
        </CustomButton>
      </section>
    </div>
  )
}

export default Onboarding
