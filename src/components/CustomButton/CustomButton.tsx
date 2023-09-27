import './CustomButton.css'

type CustomButtonPropType = {
  onClick?: () => void
  children: React.ReactNode
  isSubmitType?: boolean
  variant?: 'primary' | 'secondary'
}
const CustomButton = (props: CustomButtonPropType) => {
  const { children, onClick, isSubmitType = false, variant = 'primary' } = props
  return (
    <button
      type={isSubmitType ? 'submit' : 'button'}
      className={variant === 'primary' ? "CustomButton" : 'CustomButton SecondaryButton'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
