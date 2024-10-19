import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './user';
import Friends from './Friends';




function App() {
  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button 2 clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
     
      <h1>core  React part 2 </h1>
      
      <Friends></Friends>
      <Users></Users>
      <Team>

      </Team>
      <button onClick={handleClick}>click me </button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>Button 3</button>
      <button  onClick={()=>addToFive(3)}>four</button>
      <Counter></Counter>
      <Counter></Counter>
      
      



     
    </>
  )
}

export default App
