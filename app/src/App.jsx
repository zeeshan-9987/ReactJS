import { useState } from 'react'
import './App.css'

// let count = 0

function App() {
  let [count, setCount]= useState(0)

function increment(){
  // count = count + 1
  // console.log(count)
  setCount(count + 1)
}

function decrement(){
  // count = count - 1
  // console.log(count)
  setCount(count - 1)
}

function reset(){
  // count = 0
  // console.log(count)
  setCount(0)
}
  return (
    <>
      <h1>COUNTER APP</h1>
      <p>Current Count: {count}</p>

      <div className='buttons'>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  )
}

export default App
