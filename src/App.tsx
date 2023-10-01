import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from './screens/Login/Login'
import Main from './screens/Main/Main'
import Onboarding from './screens/Onboarding/Onboarding'
import Signup from './screens/Signup/Signup'
import AddFinancesForm from './screens/AddFinancesForm/AddFinancesForm'
import Dashboard from './screens/Dashboard/Dashboard'
import Finances from './screens/Finances/Finances'
import Profile from './screens/Profile/Profile'
import BottomSheet from './components/BottomSheet/BottomSheet'
import NotFound from './components/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import { TelegramContext } from './context/TelegramContext'
import { AuthProvider } from './context/AuthContext'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { ListProvider } from './context/ListContext'

function App() {
  const Telegram = (window as any).Telegram.WebApp
  const value = {
    Telegram: Telegram,
    navigateTo: '/login',
    setNavigationPath: (path: string) => {
      value.navigateTo = path
    },
  }

  useEffect(() => {
    console.log((window as any).Telegram.WebApp)
  }, [])

  return (
    <Router>
      <TelegramContext.Provider value={value}>
        <AuthProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/main/*" element={<Main />}>
                <Route path="" element={<Navigate to="dashboard" />} />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute
                      redirectPath="/login"
                      children={<Dashboard />}
                    />
                  }
                />
                <Route
                  path="finances"
                  element={
                    <ProtectedRoute redirectPath="/login">
                      <ListProvider>
                        <Finances />
                      </ListProvider>
                    </ProtectedRoute>
                  }
                  children={
                    <Route
                      path="add-finance"
                      element={
                        <ProtectedRoute redirectPath="/login">
                          <BottomSheet>
                            <AddFinancesForm />
                          </BottomSheet>
                        </ProtectedRoute>
                      }
                    />
                  }
                />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute redirectPath="/login">
                      <Profile />
                    </ProtectedRoute>
                  }
                >
                  {/* <Route
                    path="change-password"
                    element={
                      <ProtectedRoute redirectPath="/login">
                        <BottomSheet>
                          <ChangePasswordForm />
                        </BottomSheet>
                      </ProtectedRoute>
                    }
                  /> */}
                </Route>
                <Route
                  path="*"
                  element={
                    <ProtectedRoute redirectPath="/login">
                      <NotFound />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AuthProvider>
      </TelegramContext.Provider>
    </Router>
  )
}

export default App
