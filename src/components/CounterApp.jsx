import React from 'react'
import { useState} from 'react';



const CounterApp = () => {
const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default CounterApp
