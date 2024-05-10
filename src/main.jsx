import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import Root from './layout/Root'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>

  </React.StrictMode>,
)
