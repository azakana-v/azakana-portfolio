import React from "react";
import "./Xpinfo.css";

function Xpinfo(props) {
  return (
    <div
      style={{ textAlign: props.xpobj.direction }}
      className="xpcard-container"
    >
      <h1>{props.xpobj.title}</h1>
      <p>{props.xpobj.org}</p>
      <p>{props.xpobj.date}</p>
    </div>
  );
}

export default Xpinfo;
