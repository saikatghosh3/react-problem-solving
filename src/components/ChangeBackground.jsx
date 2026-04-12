import React, { useState } from 'react'

const ChangeBackground = () => {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    const newColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  };

  return (
    <div style={{ background: color, height: "100vh" }}>
      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default ChangeBackground;