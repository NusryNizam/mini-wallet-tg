import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'
import image from '../../assets/images/image.png'
import logo from '../../assets/images/mini-wallet-logo.png'
import './Onboarding.css'
import { useEffect } from 'react'

const Onboarding = () => {
  const Telegram = (window as any).Telegram.WebApp

  useEffect(() => {
    Telegram.BackButton.show()
    Telegram.MainButton.show().enable().setText('Get Started').onClick(handleClick)
  }, [])

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('login')
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
        <CustomButton onClick={handleClick}>Get Started</CustomButton>
      </section>
    </div>
  )
}

export default Onboarding
