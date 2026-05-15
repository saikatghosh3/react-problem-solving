import React from 'react';

const CircularFlipCards = () => {
  const totalCards = 10;
  const radius = 220; // Circle er distance

  return (
    <div className="main-wrapper">
      <style>{`
        .main-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #020617;
        }

        .circle-container {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-wrapper {
          position: absolute;
          width: 90px;
          height: 120px;
          perspective: 1000px; /* Eita must, flip er depth er jonno */
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d; /* Eita chara flip hobe na */
          cursor: pointer;
        }

        /* Hover korle card full 180 degree ghurbey */
        .card-wrapper:hover .card-inner {
          transform: rotateY(180deg);
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden; /* Pichon dik dhaka thakbe */
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          font-family: sans-serif;
          font-weight: bold;
          font-size: 20px;
          color: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }

        .front {
          background: #3b82f6;
          border: 2px solid #60a5fa;
        }

        .back {
          background: #ef4444;
          transform: rotateY(180deg); /* Back side agei ulta kora thakbe */
          border: 2px solid #f87171;
        }
      `}</style>

      <div className="circle-container">
        {Array.from({ length: totalCards }).map((_, i) => {
          const angle = (i * 360) / totalCards;
          
          return (
            <div
              key={i}
              className="card-wrapper"
              style={{
                // Rotate angle, Move out by radius, Rotate back to keep text straight
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
              }}
            >
              <div className="card-inner">
                {/* Front Side */}
                <div className="face front">
                  {i + 1}
                </div>
                {/* Back Side */}
                <div className="face back">
                  Hi!
                </div>
              </div>
            </div>
          );
        })}

        {/* Center Guide (Optional) */}
        <div style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          background: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 20px white'
        }}></div>
      </div>
    </div>
  );
};

export default CircularFlipCards;