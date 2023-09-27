import './CustomButton.css'

type CustomButtonPropType = {
    onClick?: () => void
    children: React.ReactNode
    isSubmitType?: boolean
}
const CustomButton = (props: CustomButtonPropType) => {
  const {children, onClick, isSubmitType = false} = props
  return (
    <button type={isSubmitType ? 'submit' : 'button'} className="CustomButton" onClick={onClick}>{children}</button>
  )
}

export default CustomButton