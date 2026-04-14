import React from 'react'
import Child1 from './Child1'
import { useDispatch } from 'react-redux'
import { fetchByPost } from '../Thunk/thunk'

const Parent = () => {
    console.log("This is Parent Component")
    const dispatch = useDispatch()


    const fetchPost= ()=>{
        dispatch(fetchByPost())
    }
  return (
    <>
    <div>This is Parent Component</div>
    <Child1 />

    <button onClick={fetchPost}>Fetch Post</button>
    </>
    
  )
}

export default Parent