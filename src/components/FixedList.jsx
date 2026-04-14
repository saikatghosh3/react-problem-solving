// FixedList 
import React from 'react'

const FixedList = () => {
    const list = ["Learn practice", "Practice", "sleep"];
  return (
    <div>
      <ul>
        {list.map((item, index)=>(
            <li key={index} > {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FixedList
