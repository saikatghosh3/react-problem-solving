// button click light and dark

import React from 'react'
import { useState } from 'react'

const ToggleTheme = () => {
    const [dark, setDark] = useState(false);
  return (
    <div
    style={{ background: dark?"black" : "white",
        color: dark? "white": "black", 
        height: "100vh",
    }}>

        <button onClick={()=> setDark(!dark)}>
            ToggleTheme </button> 
            <h1>This is a text</h1>
        
      
    </div>
  )
}

export default ToggleTheme
