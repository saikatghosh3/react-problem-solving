import React from 'react';

const ProductFanFinalFixed = () => {
  const cards = [
    { id: 1, title: "Brass Item 1", price: "৳2500" },
    { id: 2, title: "Brass Item 2", price: "৳4200" },
    { id: 3, title: "Brass Item 3", price: "৳1800" },
    { id: 4, title: "Brass Item 4", price: "৳3100" },
    { id: 5, title: "Brass Item 5", price: "৳1200" },
  ];

  return (
    <div className="layout-center">
      <style>{`
        .layout-center {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f8fafc;
        }

        /* 1. Static Wrapper: Eita spread thaka obosthay mouse-ke dore rakhe */
        /* Eitar width cards spread hobar porer width thekeo boro */
        .interaction-area {
          position: relative;
          width: 1100px; 
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 50px;
          /* background: rgba(0,0,0,0.02); // Just check korar jonno eita on korte paro */
        }

        .card-container-base {
          position: relative;
          width: 200px;
          height: 280px;
        }

        .item-card {
          position: absolute;
          width: 200px;
          height: 280px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
          /* Transition duration komanu holo jate response fast hoy */
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
          overflow: hidden;
          cursor: pointer;
          left: 0;
          pointer-events: none; /* Mouse card er upore geleo jeno trigger area ke distrub na kore */
        }

        /* Initial Stack (Bundle Look) */
        .item-card:nth-child(1) { z-index: 5; transform: translateY(0) rotate(0deg); }
        .item-card:nth-child(2) { z-index: 4; transform: translateY(-6px) rotate(1deg); }
        .item-card:nth-child(3) { z-index: 3; transform: translateY(-12px) rotate(-1deg); }
        .item-card:nth-child(4) { z-index: 2; transform: translateY(-18px) rotate(2deg); }
        .item-card:nth-child(5) { z-index: 1; transform: translateY(-24px) rotate(-2deg); }

        /* SPREAD ON HOVER */
        .interaction-area:hover .item-card {
            pointer-events: auto; /* Spread hoye gele ekhon card click/touch kora jabe */
        }

        .interaction-area:hover .item-card:nth-child(1) { transform: translateX(0); }
        .interaction-area:hover .item-card:nth-child(2) { transform: translateX(210px); }
        .interaction-area:hover .item-card:nth-child(3) { transform: translateX(420px); }
        .interaction-area:hover .item-card:nth-child(4) { transform: translateX(630px); }
        .interaction-area:hover .item-card:nth-child(5) { transform: translateX(840px); }

        /* INDIVIDUAL HOVER HIGHLIGHT */
        /* Card spread thaka obosthay highlight hobe, shaking charai */
        .item-card:hover {
          z-index: 100 !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          /* translateY use korle spread position thik rekhe upore uthbe */
          margin-top: -30px; 
          border-color: #6366f1;
        }

        .card-img-box {
          height: 70%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 12px;
        }

        .card-text-box {
          padding: 12px;
          text-align: center;
        }

        .card-text-box h4 { margin: 0; font-size: 14px; color: #1e293b; }
        .card-text-box p { margin: 5px 0 0; color: #6366f1; font-weight: bold; }
      `}</style>

      {/* interaction-area eita shob control korbe */}
      <div className="interaction-area">
        <div className="card-container-base">
          {cards.map((card) => (
            <div key={card.id} className="item-card">
              <div className="card-img-box">Product Image</div>
              <div className="card-text-box">
                <h4>{card.title}</h4>
                <p>{card.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFanFinalFixed;