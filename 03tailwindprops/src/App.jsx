import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj  = {
    username:"golu",
    age:24
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind Test</h1>

      <Card  username="golu Kumar"  obj={myObj} newArr = {myArr} btntext="click me"/>
      <Card  username="Sourav Jaiswal" btntext="read more"/>
    </>
  )
}

export default App
