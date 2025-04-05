import { useState } from 'react'

import './App.css'
import Logos from './components/logos.component.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logos />
      <h1>Nishant Talpade</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
