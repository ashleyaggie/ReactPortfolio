import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <a class={props.direction ? props.direction : "btn left"} href={props.link} target="_blank" rel="noreferrer">{props.dataType}</a>
  );
}

export default CardBtn;
