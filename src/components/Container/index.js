import React from "react";


function Container(props) {
  console.log("Props ", props.children)
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default Container;
