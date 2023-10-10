import './Card.css'

type CardProps = {
  title: string,
  children?: React.ReactNode,
  subtitle: string
}

const Card = ({ subtitle, title, children }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <small>{subtitle}</small>
      <div className='chart-container'>
        {children}
      </div>
    </div>
  )
}

export default Card
