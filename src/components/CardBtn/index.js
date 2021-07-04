import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button 
      type="button"
      onClick={props.onClick} 
      className={props.direction ? props.direction : "btn left"} 
    >{props.dataType}</button>
  );
}

export default CardBtn;
