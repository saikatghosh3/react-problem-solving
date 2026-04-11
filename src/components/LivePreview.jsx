// live preview text
import React, { useState } from 'react'

const LivePreview = () => {
    const [text, setText]= useState("")
  return (
    <div>
       <input type="text"
       onChange={(e)=>setText(e.target.value)} />
       <h2>Typed Text is {text}</h2>
    </div>
  )
}

export default LivePreview
