import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comonents/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username :"mohit",
    age: 34,
  }

  let newArr = [1,3,5,6,7]

  return (
    <>
  <h1 className='bg-green-400 text-black p-5 rounded-lg mb-5'>Tailwind Test</h1>

 {/* <Card someobj={newArr}/> */}
 <Card username= "rohit" btnText="click me"/>
 <Card username= "mohan" btnText="visit me"/>

    </>
  )
}

export default App
