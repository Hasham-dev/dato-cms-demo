import React, { useState } from 'react'
import './App.css'
import { Container } from './AppElement'

function App () {
  const [counter, setCounter] = useState(0)
  const counterIncrement = () => {
    counter < 10 ? setCounter(counter + 1) : setCounter(0)
  }

  return (
    <div className='App'>
      <Container>
        <p>
          Edit heloo and save to reload.\
        </p>
        <h2>Hasham</h2>
        <h2>{counter}</h2>
        <button
          onClick={counterIncrement}
        >Click me
        </button>
      </Container>
    </div>
  )
}

export default App
