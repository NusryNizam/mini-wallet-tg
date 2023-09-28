import { useEffect } from 'react'
import { Link, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom'

const NotFound = () => {
const location = useLocation()

  return (
    <div>
      <h2 className="title">Page Not Found</h2>
      <Link to="/">Go to homepage</Link>
      <br />
      <br />
      <small className='small-text'>Current Location: <strong>{location.pathname}</strong></small>
    </div>
  )
}

export default NotFound
