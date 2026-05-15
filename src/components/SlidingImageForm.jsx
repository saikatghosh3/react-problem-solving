import React from 'react';

const SlidingImageForm = () => {
  return (
    <div className="main-stage">
      <style>{`
        .main-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: radial-gradient(circle at center, #1e293b, #0f172a);
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .form-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        /* The Form Card */
        .glass-form {
          position: relative;
          width: 380px;
          padding: 50px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          z-index: 20;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* The "Organic" Sliding Image */
        .organic-image {
          position: absolute;
          right: 20px;
          width: 340px;
          height: 420px;
          border-radius: 25px;
          object-fit: cover;
          z-index: 10;
          opacity: 0;
          /* Prothome image ta scale down ebong rotate hoye thakbe */
          transform: scale(0.4) rotate(-30deg) translateX(0);
          /* Transition-e 'purer' feel anar jonno long duration ar complex easing */
          transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
          filter: blur(10px);
          pointer-events: none;
          box-shadow: -20px 20px 40px rgba(0,0,0,0.4);
        }

        /* Hover state effects */
        .form-wrap:hover .glass-form {
          transform: translateX(-150px) scale(0.98);
          box-shadow: 20px 25px 50px -12px rgba(0, 0, 0, 0.3);
        }

        .form-wrap:hover .organic-image {
          opacity: 1;
          /* Ber hoye ashar somoy ghurey shojha hobe ar blur chole jabe */
          transform: scale(1) rotate(0deg) translateX(280px);
          filter: blur(0);
        }

        /* Input styling for a clean look */
        h2 { font-weight: 700; margin-bottom: 20px; color: #0f172a; }
        .field { margin-bottom: 15px; }
        input {
          width: 100%;
          padding: 15px;
          background: #f1f5f9;
          border: none;
          border-radius: 12px;
          outline: none;
          box-sizing: border-box;
        }
        .action-btn {
          width: 100%;
          padding: 15px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 10px;
          transition: 0.3s;
        }
        .action-btn:hover { background: #1d4ed8; letter-spacing: 1px; }
      `}</style>

      <div className="form-wrap">
        {/* Form Container */}
        <div className="glass-form">
          <h2>Welcome</h2>
          <div className="field">
            <input type="text" placeholder="Username" />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" />
          </div>
          <button className="action-btn">Sign In</button>
        </div>

        {/* The Animated Image */}
        <img 
          src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1932&auto=format&fit=crop" 
          alt="Artistic" 
          className="organic-image"
        />
      </div>
    </div>
  );
};

export default SlidingImageForm;