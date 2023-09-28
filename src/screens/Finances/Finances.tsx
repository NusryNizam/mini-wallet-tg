import { Outlet, useNavigate } from 'react-router-dom'
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton'
import ListItem from '../../components/ListItem/ListItem'
import './Finances.css'
import { useContext, useEffect } from 'react'
import { TelegramContext } from '../../context/TelegramContext'

const Finances = () => {
  let { Telegram, setNavigationPath } = useContext(TelegramContext)

  useEffect(() => {
    setNavigationPath('add')
    Telegram.BackButton.hide()
    Telegram.MainButton.hide()
    console.log('inside finances');
    
  }, [])

  const navigate = useNavigate()
  // const handleClick = (path: string) => {
  //   navigate(path)
  // }

  const openBottomSheet = () => {
    // navigate('add')
    navigate('add-finance')


    // Telegram.showAlert('alert!')
    // Telegram.BackButton.show()
  }

  return (
    <div className="Finances">
      <h2 className="title">Finances</h2>
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <div className="button-container">
        <FloatingActionButton title="Add" onClick={openBottomSheet}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        </FloatingActionButton>
      </div>
      <Outlet />
    </div>
  )
}

export default Finances
