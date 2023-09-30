import axios from 'axios'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiUrl from '../utils/base'

export type AuthContextType = {
  login: (data: { email: string; password: string }) => void
  logout: () => void
  isAuthenticated: boolean
  currentUser: string
}

export const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderPropTypes = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderPropTypes) {
  const [currentUser, setCurrentUser] = useState('')
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (data: { email: string; password: string }) => {
    axios
      .post(
        `${apiUrl}/login`,
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
        setCurrentUser(data.email)
        toast.success('Success!')
        navigate('/main/dashboard')
        console.log('Success!')
      })
      .catch((err) => {
        toast.error(`Error: ${err.response.data.error}`)
        console.log(err.response.data.error)
      })
  }

  const logout = () => {
    axios
      .get(`${apiUrl}/logout`, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        setIsAuthenticated(false)
        setCurrentUser('')
        toast.success('Logged out')
        navigate('/login')
        console.log('Successfully logged out')
      })
      .catch((err) => {
        toast.error(`Error: ${err.response.data.error}`)
        console.log(err.response.data.error)
      })
  }

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
