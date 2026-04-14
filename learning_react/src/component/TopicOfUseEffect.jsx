import { useState } from "react";
import { useEffect } from "react";
import Button from './Button';

const TopicOfUseEffect = () => {

    const [count, setCount] = useState(0);

    //Runs once when the component mounts
    //[] = no dependencies, so it doesn’t re-run
     useEffect(() => {
        console.log("Component mounted");
    }, []);

    // useEffect runs on mount
    // return () => {} runs on unmount
    // [] keeps it optimized (runs once)
    useEffect(() => {
        console.log("Mounted");

    return () => {
        console.log("Unmounted");
  };
  }, []);

  //Runs on first render
  //Runs again only when count changes
  //[count] = dependency array (keeps it optimized)
    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);


    //New Code
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

export default TopicOfUseEffect