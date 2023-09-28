import { useContext, useEffect } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './BottomSheet.css'
import { TelegramContext } from '../../context/TelegramContext'
import { useNavigate } from 'react-router-dom'

type BottomSheetPropTypes = {
  children: React.ReactNode
  onCloseModal: () => void
}

const BottomSheet = (props: BottomSheetPropTypes) => {
  const { children, onCloseModal } = props
  const navigate = useNavigate()

   let { Telegram, navigateTo, setNavigationPath } = useContext(TelegramContext)

  useEffect(() => {
    setNavigationPath('')
    Telegram.BackButton.show().onClick(goBack)
    Telegram.MainButton.show()
      .enable()
      .setText('Save')
      .onClick(() => () => {})

    console.log('inside bottomsheet');

  }, [navigateTo])

  function goBack() {
    navigate(-1)
  }




  return (
    <div className="BottomSheet">
      <div className="overlay"></div>
      <div className="content">
        <div className="children">{children}</div>
        <div className="cancelButtonContainer">
          <CustomButton onClick={onCloseModal} variant="secondary">
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default BottomSheet
