import React from "react";
import "./HomeImg.css";
import Part1 from "./vituLogo/part1.png";
import Part2 from "./vituLogo/part2.png";
import PerfilImg from "./vituLogo/vitu next logo img.png";

function HomeImg() {
  return (
    <div>
      <div className="perfilimg-container ">
        <img className="slide-top2" src={Part2} alt="aa" />
        <div className="testeee">
          <div className="spinner"></div>
        </div>
        <img className="slide-top" src={PerfilImg} alt="aa" />
        <img className="slide-top2" src={Part1} alt="aa" />
      </div>
    </div>
  );
}

export default HomeImg;
