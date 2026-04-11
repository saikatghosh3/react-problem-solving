// 1.Create a counter with:

// Increase button
// Decrease button
// Reset button

import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
     <h1>count: {count}</h1> 
     <button onClick={()=> setCount(count +1)}> Increase </button>
     <button onClick={()=> setCount(count -1)}> Increase </button>
     <button onClick={()=> setCount(0) }>reset  </button>
     
    </div>
  )
}

export default Counter
