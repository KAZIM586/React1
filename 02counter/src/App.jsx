import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  // let counter = 5

  const addValue = () => {
    if(counter < 100){
   counter = counter + 1
   setCounter(counter)
    }
  }

  const decreseValue = () => {
    if(counter > 0){
   setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value </button>
      <button onClick={decreseValue}>Decrease value</button>
      <p>Value start from 0 add value up to 100 only</p>
    </>
  )
}

export default App
