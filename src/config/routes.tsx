import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signin from '@/pages/auth/signin'
import Signup from '@/pages/auth/signup'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/dashboard/home'
import Auth from '@/layouts/auth'
import Dashboard from '@/layouts/dashboard'
import About from '@/pages/dashboard/about'

export const router = createBrowserRouter([
  {
    element: <Dashboard />,
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    element: <Auth />,
    path: 'auth',
    children: [
      {
        index: true,
        element: <Navigate to="signin" replace />
      },
      {
        path: 'signin',
        element: <Signin />,
        index: true
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
