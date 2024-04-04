import React from "react";
import "./Triangle.css";

const Triangle = (props) => {
  return (
    <svg
      width={props.triangleWidth ? props.triangleWidth : "100%"}
      height={props.triangleHeight ? props.triangleHeight : "100%"}
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        props.soloTriangle
          ? { transform: "rotate(-8deg)" }
          : { position: "absolute" }
      }
    >
      <g id="fundolinhas">
        <g id="bola e linhas">
          {props.soloTriangle ? (
            ""
          ) : (
            <g id="linhas">
              <path
                id="linha3"
                d="M-53.5695 343.402C-32.6528 429.766 72.6278 601.914 326.417 599.59C643.653 596.686 666.894 494.066 726.158 410.994C810.389 292.925 991.683 241.945 1378.06 613.156C1498.39 728.76 1534.16 720.24 1569.8 714.237"
                stroke="rgb(19, 19, 19)"
                stroke-width="4"
              />
              <path
                id="linha2"
                d="M-71 325.017C-46.2099 428.228 33.8158 617.919 155.597 550.997C307.824 467.344 -191.852 345.35 75.4167 363.939C342.685 382.529 232.292 548.673 354.306 532.407C476.32 516.141 234.035 475.477 315.377 429.584C396.72 383.691 551.852 514.98 562.891 523.693C573.931 532.407 658.178 587.014 777.868 494.647C897.558 402.28 984.711 388.338 1048.62 429.584C1112.54 470.829 1188.07 626.517 1361.79 413.899C1419.89 342.789 1410.6 311.075 1399.56 273.896"
                stroke="rgb(19, 19, 19)"
                stroke-width="4"
              />
              <path
                id="linha1"
                d="M-33.2338 308.751C90.5232 446.624 487.563 661.591 633.195 616.06C820.864 557.387 817.378 490 896.977 501.618C975.912 513.14 913.246 579.462 952.174 631.745C991.102 684.029 1121.1 677.592 1451.85 503.942C1752.82 345.931 1865.54 345.931 1865.54 345.931"
                stroke="rgb(19, 19, 19)"
                stroke-width="4"
              />
            </g>
          )}

          <g id="bolas">
            <path
              id="fundobranco"
              d="M1868.53 345.045L1569.04 716.835L1396.75 271.62L1868.53 345.045Z"
              fill="white"
            />
            <circle
              r="4.5"
              id="bola2"
              cx="1399.56"
              cy="273.315"
              fill="rgb(19, 19, 19)"
              className="bolas"
            />
            <circle
              r="4.5"
              id="bola3"
              cx="1569.22"
              cy="712.494"
              fill="rgb(19, 19, 19)"
              className="bolas"
            />
            <circle
              r="4.5"
              id="bola1"
              cx="1865.54"
              cy="345.35"
              fill="rgb(19, 19, 19)"
              className="bolas"
            />
          </g>
        </g>
        <g id="veias">
          <path
            id="veia3"
            d="M1568.5 714C1625 701.5 1715.6 707.9 1626 833.5C1536.4 959.1 1569.33 1010.83 1597 1021C1645.67 1031.83 1717.2 1065.4 1614 1113"
            stroke="rgb(19, 19, 19)"
            stroke-width="4"
          />
          <path
            id="veia1"
            d="M1865.5 346C1885.17 339.667 1920.5 312.3 1904.5 253.5C1888.5 194.7 1791.5 193.667 1745 200.5C1708.17 213.333 1621.7 217.7 1570.5 132.5C1519.3 47.3 1549.17 -3.33333 1570.5 -18"
            stroke="rgb(19, 19, 19)"
            stroke-width="4"
          />
          <path
            id="veia2"
            d="M1399.5 275.5C1421.67 221.833 1415.9 121 1215.5 147C1015.1 173 915.333 31.5 890.5 -42.5"
            stroke="rgb(19, 19, 19)"
            stroke-width="4"
          />
        </g>
        <g id="flechas">
          <path
            id="flecha1"
            d="M1865.15 346.232L1417.8 274.78M1417.8 274.78L1430 292.207M1417.8 274.78L1435.23 262"
            stroke="rgb(19, 19, 19)"
            stroke-width="4"
          />
          <path
            id="flecha3"
            d="M1569.44 713.897L1854.93 362.196M1854.93 362.196L1833.74 364.051M1854.93 362.196L1857.29 383.679"
            stroke="rgb(19, 19, 19)"
            stroke-width="4"
          />
          <path
            id="flecha2"
            d="M1400.01 273.043L1561.24 696.358M1561.24 696.358L1570.26 677.092M1561.24 696.358L1541.46 687.63"
            stroke="rgb(19, 19, 19)"
            stroke-width="4"
          />
        </g>
      </g>
    </svg>
  );
};

export default Triangle;
