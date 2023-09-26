import './CustomButton.css'

type CustomButtonPropType = {
    onClick: () => void
    children: React.ReactNode
}
const CustomButton = ({children, onClick}: CustomButtonPropType) => {
  return (
    <button className="CustomButton" onClick={onClick}>{children}</button>
  )
}

export default CustomButton