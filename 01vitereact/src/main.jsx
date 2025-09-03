import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  const username = "Sourav Jaiswal"
  return(
    <h1>hello from {username}</h1>
  )
}

const anotherElement = (
  <a href='https://youtube.com' target='_blank'>click to visit youtube</a>
)

const ReactElement = React.createElement(
  'a',
  {href:"https://youtube.com", target:'_blank'},
  'click me to visit youtube.com'
)

createRoot(document.getElementById('root')).render(
    <Myapp />
)
