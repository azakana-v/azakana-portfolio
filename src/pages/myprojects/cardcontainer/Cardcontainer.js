import React from "react";
import "./Cardcontainer.css";
import { Sendbutton2 } from "../../../components/sendbutton2/Sendbutton2";

export default function Cardcontainer(props) {
  return (
    <div className="card-container">
      <Sendbutton2
        title={props.title}
        position={
          window.innerWidth < 720
            ? ["-50px", "auto", "auto", "80px"]
            : ["auto", "auto", "auto", "auto"]
        }
      />
      <div className="background">
        <img
          className="background-card-image"
          src={props.backgroundimage}
          alt=""
        />
      </div>
      <div className="ball-container">
        <a target="blank" href={props.gitlink}>
          <svg
            className="balls"
            width="204"
            height="221"
            viewBox="0 0 204 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <circle cx="108" cy="96" r="96" fill="#F90000" /> */}
            <circle cx="48" cy="173" r="48" fill="#F90000" />
            <path
              cx="48"
              cy="173"
              d="M70.8183 170.6546L31.3487 192.102L30.8845 150.0845L70.8183 170.6546Z"
              fill="#FFFFFF"
            />{" "}
          </svg>
        </a>
      </div>
      <div className="flash-container">
        <svg
          className="flash"
          width="246"
          height="366"
          viewBox="0 0 246 366"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M165.703 156.61L118.823 1L244.226 248.549L167.173 223.685L71.2292 178.125L52.3105 365.386L1.4604 92.4014L165.703 156.61Z"
            fill="#F90000"
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
}
