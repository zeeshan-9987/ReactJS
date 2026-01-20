import React from 'react'
import './square.css'

const Square = ({color}) => {
  return (
    <div className={color}></div>
  )
}

export default Square