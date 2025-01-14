import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
            <main>
                <h2>Bienvenido a My Team Flix</h2>
            </main>
    <Footer />      
    </>
  )
}

export default App
