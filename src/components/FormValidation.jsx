// show error message if  the input field is empty.
import { useState } from "react";

import React from 'react'

const FormValidation = () => {
    const [name, setName] = useState("");
    const [error, setError ] = useState("");

 const handleSubmit = ()=>{
    if(name === ""){
        setError("Name is reqired!");
    }else{
        setError("")
        alert("submited!")
    }
 }

  return (
    <div>
      <input type="text"
      placeholder="Enter your name "
      onChange={(e)=> setName(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {error && <p style={{color:"red"}}> {error}</p>}
    </div>
  )
}

export default FormValidation
