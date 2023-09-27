import './ListItem.css'

const ListItem = () => {
  return (
    <div className="ListItem">
      <div>
        <div className="name">Rent for Apartment</div>
        <div className="date">19 Sep 2023</div>
      </div>
      <div>
        {/* <div className="icon"> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
            {/* </div> */}
        <div className="amount">$200</div>
      </div>
    </div>
  )
}

export default ListItem
