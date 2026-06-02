import React, { useState } from 'react'

const CharacterCounter = () => {
    const [text, setText] = useState("")
  return (
    <div>
       <textarea
       value={text}
       onChange={(e)=>setText(e.target.value)}
       >
     
       </textarea>
       <p> characters:{text.length}</p>
    </div>
  )
}

export default CharacterCounter
