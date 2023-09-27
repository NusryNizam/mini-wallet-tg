import CustomButton from '../CustomButton/CustomButton'
import './BottomSheet.css'

type BottomSheetPropTypes = {
    children: React.ReactNode
    onCloseModal: () => void
}

const BottomSheet = (props: BottomSheetPropTypes) => {
    const { children, onCloseModal } = props
  return (
    <div className='BottomSheet'> 
    <div className="overlay"></div>
    <div className="content">
        <div className="children">
            {children}
        </div>
        <div className="cancelButtonContainer">
        <CustomButton onClick={onCloseModal} variant='secondary'>Cancel</CustomButton>
        </div>
    </div>
    </div>
  )
}

export default BottomSheet