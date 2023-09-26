import { Route, Routes, Navigate } from 'react-router-dom'
import Finances from '../Finances/Finances'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import NavBar from '../../components/NavBar/NavBar'
import './Main.css'

const Main = () => {
  return (
    <div className='Main'>
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  )
}

export default Main
