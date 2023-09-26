import './Card.css'

type CardProps = {
  title: string
}

const Card = ({ title }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
    </div>
  )
}

export default Card
