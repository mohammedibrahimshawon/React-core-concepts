import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button 2 clicked')
  }

  return (
    <>
     
      <h1>core  React part 2 </h1>
      <button onClick={handleClick}>click me </button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>Button 3</button>


     
    </>
  )
}

export default App
