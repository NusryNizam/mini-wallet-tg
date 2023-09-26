import './Onboarding.css'
import image from '../../assets/images/image.png'
import logo from '../../assets/images/logo.png'
import CustomButton from '../CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('login')
    }
    return (
        <div className='Onboarding'>
            <div className='logo-container'>
                <img src={logo} alt="" />
            </div>
            <div>
                <img src={image} alt="" />
            </div>
            <section className='tagline'>
                <h3>
                    Manage and visualize your day-to-day finances inside Telegram without the hassle
                </h3>
                <CustomButton onClick={handleClick}>Get Started</CustomButton>
            </section>
        </div>
    )
}

export default Onboarding