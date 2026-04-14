import React from 'react'
import { useSelector } from 'react-redux'

const Child2 = () => {
    console.log("This is Child2 Component")
    const count = useSelector((state)=> state.counter.value)
  return (

    <span>This is Child2 Component and Count is {count}</span>
    
  )
}

export default Child2