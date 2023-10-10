import './ListItem.css'

type ListItemPropType = {
  name: string
  date: string
  category: string
  amount: number
}
const ListItem = (props: ListItemPropType) => {
  const { name, date, category, amount } = props
  return (
    <div className="ListItem">
      <div>
        <div className="name">{name}</div>
        <div className="date">{date}</div>
      </div>
      <div>
        {category === 'income' ? (
          <svg
            className='income'
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#44ed38"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
          </svg>
        ) : (
          <svg
            className='expense'
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#ed3838"
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        )}
        <div className="amount">${amount}</div>
      </div>
    </div>
  )
}

export default ListItem
