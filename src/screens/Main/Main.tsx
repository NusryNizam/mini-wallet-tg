import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Finances from '../Finances/Finances'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import NavBar from '../../components/NavBar/NavBar'
import './Main.css'
import BottomSheet from '../../components/BottomSheet/BottomSheet'
import AddFinancesForm from '../AddFinancesForm/AddFinancesForm'
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm'
import NotFound from '../../components/NotFound/NotFound'

const Main = () => {
  const navigate = useNavigate()
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finances" element={<Finances />}>
          <Route
            path="add-finance"
            element={
              <BottomSheet onCloseModal={() => navigate(-1)}>
                <AddFinancesForm />
              </BottomSheet>
            }
          />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route
            path="change-password"
            element={
              <BottomSheet
                onCloseModal={() => navigate('profile')}
                children={<ChangePasswordForm />}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="nav-container">
        <NavBar />
      </div>
    </div>
  )
}

export default Main
