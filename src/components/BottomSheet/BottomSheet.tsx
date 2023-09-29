import { useNavigate } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton'
import './BottomSheet.css'

type BottomSheetPropTypes = {
  children: React.ReactNode
}

const BottomSheet = (props: BottomSheetPropTypes) => {
  const navigate = useNavigate()
  const { children } = props

  return (
    <div className="BottomSheet">
      <div className="overlay"></div>
      <div className="content">
        <div className="children">{children}</div>
        <div className="cancelButtonContainer">
          <CustomButton onClick={() => navigate(-1)} variant="secondary">
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default BottomSheet
