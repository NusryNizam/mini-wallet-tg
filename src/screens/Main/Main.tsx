import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Finances from '../Finances/Finances'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import NavBar from '../../components/NavBar/NavBar'
import './Main.css'
import BottomSheet from '../../components/BottomSheet/BottomSheet'
import AddFinancesForm from '../AddFinancesForm/AddFinancesForm'
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm'

const Main = () => {
  const navigator = useNavigate()
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finances" element={<Finances />}>
          <Route
            path="add"
            element={
              <BottomSheet
                onCloseModal={() => {
                  navigator('finances')
                }}
                children={<AddFinancesForm />}
              />
            }
          />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route
            path="change-password"
            element={
              <BottomSheet
                onCloseModal={() => navigator('profile')}
                children={<ChangePasswordForm />}
              />
            }
          />
        </Route>
      </Routes>
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  )
}

export default Main
