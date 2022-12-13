import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
  useEffect(()=>{
    document.title="Changed";
    console.log({count})
  })
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click Me +1 </button><br/>
    <button onClick={()=>{setCount(count-1)}}>Click Me -1</button><br/>
    <button onClick={()=>{setCount(count+5)}}>Click Me +5</button>
   
    </div>
  )
}

export default HooksEx