import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './screens/Login/Login.tsx'
import Signup from './screens/Signup/Signup.tsx'
import Onboarding from './screens/Onboarding/Onboarding.tsx'
import Main from './screens/Main/Main.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/main/*',
    element: <Main/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
    <RouterProvider router={router}/>
    </App>
  </React.StrictMode>,
)
