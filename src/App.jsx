import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import estadioImg from './assets/estadio.png'
import { CgEnter } from 'react-icons/cg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div style={{ backgroundImage: `url(${estadioImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: 'calc(100vh - 160px)' }}>
        <main>
          <h2>Bienvenido a My Football Flix</h2>
        </main>
      </div>
    <Footer />      
    </>
  )
}

export default App
