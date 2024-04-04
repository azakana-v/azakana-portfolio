import { useEffect, useState } from "react";
import "./ProfessionalXp.css";
import Xpinfo from "./Xpinfo";
import Title from "../../components/title/Title.js";
import { ReactComponent as LineDots } from "../../assets/svgs/Linedotsxp.svg";

function ProfessionalXp() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const obj1 = {
    title: "Freelance Front-End",
    org: "LGPD●LOCK",
    date: "2024 - Atualmente",
    direction: isMobile ? "center" : "left",
  };
  const obj2 = {
    title: "Aulas de desenvolvimento Web e Robótica",
    org: "Trivium - Praia Grande",
    date: "2024 - Atualmente",
    direction: isMobile ? "center" : "right",
  };
  const obj3 = {
    title: "Desenvolvedor VBA",
    org: "EZR Construtora",
    date: "2022-2022",
    direction: isMobile ? "center" : "left",
  };
  const obj4 = {
    title: "Aulas de informática",
    org: "S.O.S Tecnologia e Educação",
    date: "2021-2022",
    direction: isMobile ? "center" : "right",
  };
  const xparray = [obj1, obj2, obj3, obj4];

  return (
    <div id="professionalxp" className="professionalxp-container">
      <Title title="Experiências" strong="Profissionais" style="style2" />
      {isMobile ? (
        xparray.map((card, index) => {
          return <Xpinfo xpobj={card} key={index} />;
        })
      ) : (
        <div className="xp-container">
          <Xpinfo xpobj={obj1} />

          <div style={{ width: "auto", height: "100%" }} className="line-dots">
            <LineDots />
          </div>

          <div>
            <h1></h1>
          </div>

          <div>
            <h1></h1>
          </div>

          <Xpinfo xpobj={obj2} />

          <Xpinfo xpobj={obj3} />

          <div>
            <h1></h1>
          </div>

          <div>
            <h1></h1>
          </div>
          <Xpinfo xpobj={obj4} />
        </div>
      )}
    </div>
  );
}

export default ProfessionalXp;
