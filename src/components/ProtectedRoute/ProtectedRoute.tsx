import { Context, ReactNode, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, AuthContextType } from '../../context/AuthContext'

type ProtectedRoutePropType = {
  redirectPath: string
  children: ReactNode
}
const ProtectedRoute = (props: ProtectedRoutePropType) => {
  const navigate = useNavigate()
  const { redirectPath, children } = props
  const { isAuthenticated } = useContext<AuthContextType>(
    AuthContext as Context<AuthContextType>
  )

  // isAuthenticated ?
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(redirectPath)
    }
  }, [])

  if (isAuthenticated) {
    return <>{children}</>
  } else {
    return (
      <div>
        <h2>You are not authenticated.</h2>
        <p>Please login to continue</p>
      </div>
    )
  }
}

export default ProtectedRoute
