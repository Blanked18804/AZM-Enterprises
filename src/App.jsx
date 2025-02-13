import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

function usePageTracking() {
  const location = useLocation() // Get current route

  useEffect(() => {
    if (window.gtag) { // Ensure gtag.js is loaded
      window.gtag('config', 'G-F25BNS123Z', { // Send page view event
        page_path: location.pathname,
      })
    }
  }, [location]) // Run effect when location changes
}

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product/:productId',
      element: <Product />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
