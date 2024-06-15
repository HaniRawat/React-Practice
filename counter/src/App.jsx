import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 5

  const incValue = ()=>{
    if(counter + 1 > 20){
      alert("Limit exceed")
    } else {
      setCounter(counter+1)
      console.log(counter);
    }
  }
  const descValue = ()=>{
    if(counter-1 < 0){
      alert("Value cannot be negetive")
    } else {
      setCounter(counter-1)
      console.log(counter)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={incValue}>Inc Value</button>
      <br />
      <button onClick={descValue}>Desc Value</button>
    </>
  )
}

export default App
