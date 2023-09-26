import React from 'react'
import './Card.css'

type CardProps = {
  children?: React.ReactNode
  title: string
}

const Card = ({ children, title }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
    </div>
  )
}

export default Card
