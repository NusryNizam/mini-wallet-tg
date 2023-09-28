import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Onboarding from './screens/Onboarding/Onboarding.tsx'
import Login from './screens/Login/Login.tsx'
import Signup from './screens/Signup/Signup.tsx'
import Main from './screens/Main/Main.tsx'
import './index.css'
import NotFound from './components/NotFound/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/main/*',
    element: <Main />,
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
)
