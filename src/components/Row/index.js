import React from "react";
import "./style.css";

function Row(props) {
  return <div className="row" style={{textAlign: props.align, paddingBottom: props.padding}}>{props.children}</div>;
}

export default Row;
