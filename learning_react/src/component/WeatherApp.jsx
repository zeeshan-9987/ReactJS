import React, { useEffect,useState } from 'react'
import Button from './Button';

const WeatherApp = () => {

    const [count, setCount] = useState(0);

     const [User, setUser] = useState("");

    useEffect(() => {
        console.log("Zeeshan");
    },[count]);

        const increment = () => {
            setCount(count+1)
        }

        const decrement = () => {
            setCount(count-1)
        }
    
  return (
    <>
      <h2>Count: {count}</h2>
      <Button onClick={increment} />
      <Button onClick={decrement} />
    </>
    
  )
}

export default WeatherApp