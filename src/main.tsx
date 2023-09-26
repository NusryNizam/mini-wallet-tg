import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login.tsx'
import Signup from './components/Signup/Signup.tsx'
import Onboarding from './components/Onboarding/Onboarding.tsx'

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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
    <RouterProvider router={router}/>
    </App>
  </React.StrictMode>,
)
