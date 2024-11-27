import { createBrowserRouter } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import SignIn from './pages/sign-in'
import ApplicationLayout from './pages/layouts/application'
import AuthenticationLayout from './pages/layouts/authentication'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      }
    ]
  },
  { 
    path: '/',
    element: <AuthenticationLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      }
    ]
  }
])