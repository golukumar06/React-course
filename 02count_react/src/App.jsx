import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCount] = useState(0)


  function addvalue(){
    if(counter<20){
      setCount(counter+1)
    }
    console.log('counter',counter);
    
  }
  
  function removevalue(){
    if(counter>0){
      setCount(counter-1)
    }
    console.log('counter',counter);
  }

  return (
    <>
    <h1>Count number is : {counter}</h1>
    <button style={{backgroundColor:"black",color:"white"}} onClick={addvalue}>increase</button>
    <br />
    <button style={{backgroundColor:"black",color:"white"}} onClick={removevalue}>decreaser
    </button>
    </>
  )
}

export default App
