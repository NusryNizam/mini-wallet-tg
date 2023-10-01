import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiUrl from '../utils/base'

export type AuthContextType = {
  login: (data: { email: string; password: string }) => void
  logout: () => void
  isAuthenticated: boolean
  currentUser: string
  currentUserId: string
  setToken: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderPropTypes = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderPropTypes) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('email') || '')
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem('user') || '')
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jwt'))
  const [token, setToken] = useState(localStorage.getItem('jwt') || '')
  
  const navigate = useNavigate()

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

  useEffect(() => {
    // Check if the token is present in localStorage
    const storedToken = localStorage.getItem('jwt');

    if (storedToken) {
      // If token is present, update state and axios header
      setIsAuthenticated(true);
      setToken(storedToken);
      axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    }
  }, []);

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
      .then((res) => {
        setIsAuthenticated(true)
        console.log(res.data)
        setCurrentUser(data.email)
        setCurrentUserId(res.data.user)
        setToken(res.data.token)
        localStorage.setItem('jwt', res.data.token)
        localStorage.setItem('user', res.data.user)
        localStorage.setItem('email', data.email)
        toast.success('Success!')
        console.log('Success!')
        navigate('/main/dashboard')

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
        axios.defaults.headers.common.Authorization = '';
        setIsAuthenticated(false)
        setCurrentUser('')
        setCurrentUserId('')
        setToken('')
        localStorage.setItem('jwt', '')
        localStorage.setItem('user', '')
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
    <AuthContext.Provider value={{ login, logout, isAuthenticated, currentUser, currentUserId, setToken}}>
      {children}
    </AuthContext.Provider>
  )
}
