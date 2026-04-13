
// Three button to change color 
import React from 'react'
import { useState } from 'react'

const ChangeColor = () => {
    const [color, setColor] = useState("white");
  return (
    <div>
        <div style={{background: color, height:"100vh"}}>
            <button  onClick={()=> setColor("red")}>RED</button>
            <button  onClick={()=> setColor("yellow")}>YELLOW</button>
            <button  onClick={()=> setColor("blue")}>BLUE</button>
        </div>
      
    </div>
  )
}

export default ChangeColor
