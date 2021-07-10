import React from "react";
import "./style.css";

function Col(props) {
  return <div className="col">{props.children}</div>;
}

export default Col;
