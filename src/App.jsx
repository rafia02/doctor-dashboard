import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Pages/Home'
import AppointmentsPage from './Pages/Appointments'





const router = createBrowserRouter([
  {path: "/", element: <Layout/>, children: [
      {path: "/", element: <Homepage/>},
      { path: "appointments", element: <AppointmentsPage /> },

  ]},
])



function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='max-w-[1920px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
