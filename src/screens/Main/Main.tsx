import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import './Main.css'

const Main = () => {
  return (
    <div className="Main">
      <Outlet/>
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  )
}

export default Main
