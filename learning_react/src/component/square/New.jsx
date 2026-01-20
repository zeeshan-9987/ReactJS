import React from 'react'

const New = ({userForm}) => {
  return (
    <>
    <div>{userForm.name}</div>
    <div>{userForm.age}</div>
    <div>{userForm.College}</div>
    </>
    
  )
}

export default New