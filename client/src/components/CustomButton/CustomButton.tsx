import './CustomButton.css'

type CustomButtonPropType = {
  onClick?: () => void
  children: React.ReactNode
  isSubmitType?: boolean
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
}
const CustomButton = (props: CustomButtonPropType) => {
  const {
    isLoading = false,
    children,
    onClick,
    isSubmitType = false,
    variant = 'primary',
  } = props
  return (
    <button
      disabled={isLoading}
      type={isSubmitType ? 'submit' : 'button'}
      className={
        variant === 'primary' ? 'CustomButton' : 'CustomButton SecondaryButton'
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
