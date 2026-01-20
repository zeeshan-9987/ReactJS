import React from 'react'

const New1 = ({fruits}) => {
  return (
    <div>
        <ul>
            {fruits.map((item, index) => (
            <li key={index}  >{item}</li>
      ))}
    </ul>
    </div>
  )
}

export default New1