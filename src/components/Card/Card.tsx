import './Card.css'

type CardProps = {
  title: string,
  children?: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className='chart-container'>
        {children}
      </div>
    </div>
  )
}

export default Card
