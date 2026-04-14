import React from 'react'
import Child2 from './Child2'
import { useSelector } from 'react-redux'

const Child1 = () => {
    console.log("This is Child1 Component")
    const post = useSelector((state)=> state.post.entity)
    console.log(post)
  return (
    <>
   <table>
    <thead>
        <tr>
    <th>UserID</th>
    <th>ID</th>
    <th>Title</th>
    <th>Body</th>
    </tr>
    </thead>
    
    <tbody>
    {post.map((p) => (
  <tr key={p.id}>
    <td>{p.userId}</td>
    <td>{p.id}</td>
    <td>{p.title}</td>
    <td>{p.body}</td>
  </tr>
  
))}

</tbody>
  </table>

    <Child2 />
    
    
    </>
  )
}

export default Child1