import React from "react";
import "./style.css";

function Card({ direction, children }) {
  return (
    <div
      className={direction ? direction : "card left"} style={{width: "45rem"}}
    >
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
