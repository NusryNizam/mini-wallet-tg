import './FloatingActionButton.css'

type FloatingActionButtonPropType = {
    onClick: () => void
    title: string
    children: React.ReactNode
}
const FloatingActionButton = (props: FloatingActionButtonPropType) => {
    const {title, onClick, children} = props
  return (
    <button type='button' className="FloatingActionButton" onClick={onClick}>
        {children}
        {title}
    </button>
  )
}

export default FloatingActionButton