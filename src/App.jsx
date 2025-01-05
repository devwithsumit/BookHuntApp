import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className='py-16'>
        <AppRouter />
      </main>
    </>
  )
}

export default App
