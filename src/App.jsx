import { useState } from 'react'
import './App.css'
import { PiSoccerBallFill } from "react-icons/pi";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>My Football Flix</h1>
      <div className="card">
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
      
    </>
  )
}

export default App
