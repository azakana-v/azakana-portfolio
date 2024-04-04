import React from "react";
import "./Sendbutton2.css";

export const Sendbutton2 = (props) => {
  const positionArr = props.position;
  return (
    <div
      className="sendform-button2-container"
      style={{
        top: positionArr[0],
        right: positionArr[1],
        bottom: positionArr[2],
        left: positionArr[3],
      }}
    >
      <svg
        id="sendform-button2"
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="44.5" cy="44.5" r="44" fill="#F90000" stroke="white" />
      </svg>
      <h1 id="sendbutton2-text">{props.title}</h1>
    </div>
  );
};
