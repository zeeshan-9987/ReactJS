import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    
  }

  const decrement = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={increment} />
      <Button onClick={decrement} />
    </div>
  );
}

export default Counter
