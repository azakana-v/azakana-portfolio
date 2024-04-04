import React from "react";
import "./Sendbutton.css";

export const Sendbutton = (props) => {
  const positionArr = props.position;
  return (
    <button
      type="submit"
      className="sendform-button-container"
      style={{
        top: positionArr[0],
        right: positionArr[1],
        bottom: positionArr[2],
        left: positionArr[3],
      }}
    >
      <svg
        id="sendform-button"
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="44.5" cy="44.5" r="44" fill="#F90000" stroke="white" />
        <path
          d="M70.8183 44.6546L31.3487 66.102L30.8845 24.0845L70.8183 44.6546Z"
          fill="#D9D9D9"
        />
      </svg>
      <h1 id="sendbutton-text">Enviar!</h1>
    </button>
  );
};
