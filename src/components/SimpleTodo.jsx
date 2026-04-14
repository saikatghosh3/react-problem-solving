//simple todo before jump into advance 

import React from 'react'
import { useState } from 'react'

const SimpleTodo = () => {
    const  [task, setTask] = useState("");

    const handleSubmit=()=>{
        console.log(task);
    }
  return (
    <div>
      <input type="text"
      onChange={(e)=> setTask(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default SimpleTodo
