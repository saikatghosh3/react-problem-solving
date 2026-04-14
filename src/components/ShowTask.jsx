import React from 'react'
import { useState } from 'react'
const ShowTask = () => {
    const [task, setTask] = useState("");
    const [show, setShowTask] = useState("");

    const handleAdd=()=>{
        setShowTask(task);
    }

  return (
    <div>
      <input type="text" name="" id="" 
        onChange={(e)=>setTask(e.target.value)}
      
      />
        <button onClick={handleAdd}>Show</button>
        <h3>{show}</h3>
    </div>
  )
}

export default ShowTask
