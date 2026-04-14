import './App.css'
import Parent from './components/Parent'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slice/counterSlice'

function App() {

  const dispatch = useDispatch()


  return (
    <>
      <Parent />
      <button onClick={()=>dispatch(increment())}>
        Increase
      </button>

      <button onClick={()=>dispatch(decrement())}>
        Decrease
      </button>

      <button onClick={() => dispatch(incrementByAmount(10))}>
        Reset
      </button>
    </>
  )
}

export default App
