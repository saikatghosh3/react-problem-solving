// Click button → toggle text visibility

import React from 'react'
import { useState } from 'react'

const ToggleText = () => {
const [show ,setShow]= useState(true);

  return (
    <div>
      <button onClick={()=> setShow(!show)}> Toggle</button>
      { show &&  <p> This is a paragraph </p>}
    </div>
  )
}

export default ToggleText
