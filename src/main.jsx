import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Signon from './pages/Signon'
import Landing from './pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signon",
    element: <Signon></Signon>
  },
  {
    path: "/landing",
    element: <Landing></Landing>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
