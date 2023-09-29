import axios from 'axios'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export type AuthContextType = {
  login: (data: { email: string; password: string }) => void
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderPropTypes = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderPropTypes) {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (data: { email: string; password: string }) => {
    axios
      .post(
        'http://localhost:3000/login',
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then(() => {
        setIsAuthenticated(true)
        toast.success('Success!')
        navigate('/main/dashboard')
        console.log('Success!')
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`)
        console.log(err)
      })
  }

  const logout = () => {
    axios
      .get('http://localhost:3000/logout', {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        setIsAuthenticated(false)
        toast.success('Logged out')
        navigate('/login')
        console.log('Successfully logged out')
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`)
        console.log(err)
      })
  }

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}