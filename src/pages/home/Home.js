import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeImg from "../../components/homeimg/HomeImg";
import Triangle from "../../components/Triangle";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="TriangleContainer">
        
      </div>
      {isMobile ? (
        <section className="home">
          <div className="imghero-container">
            <HomeImg />
          </div>

          <div className="home-info">
            <div className="home-content">
              <h2>
                <span className="activate">Oi!</span> <span>Hi!</span>{" "}
                <span>Ciao!</span>
              </h2>
              <h1>Victor Principe</h1>
              <h3>Front-End Developer</h3>
              <p>
                Atuando na área de tecnologia e educação nos últimos{" "}
                <span style={{ color: "var(--primary-red)" }}>2 anos</span>,
                ministrei aulas de robótica (Arduino), programação front-end
                (JS, HTML, CSS), design gráfico, manutenção de hardware,
                eletrônica e impressão 3D. Agora busco aperfeiçoar minhas
                habilidades e{" "}
                <span style={{ color: "var(--primary-red)" }}>
                  ingressar no segmento de desenvolvimento de software
                </span>
                , convido você à explorar meu mundo e encontrar as soluções que
                desenvolvi para os desafios que encontrei em minha jornada!
              </p>
              <div className="btn-box">
                <a href="#contactme-container">Me contrate!</a>
                <a href="#contactme-container">Vamos conversar!</a>
              </div>
            </div>
            <div className="home-sci">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/victor-principe-734638119/"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a target="_blank" href="https://github.com/azak-v">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>

          {/* <span className="home-imgHover"></span> */}
        </section>
      ) : (
        <section className="home">
          <div className="home-info">
            <div className="home-content">
              <h2>
                <span className="activate">Oi!</span> <span>Hi!</span>{" "}
                <span>Ciao!</span>
              </h2>
              <h1>Victor Principe</h1>
              <h3>Front-End Developer</h3>
              <p>
                Atuando na área de tecnologia e educação nos últimos{" "}
                <span style={{ color: "var(--primary-red)" }}>2 anos</span>,
                ministrei aulas de robótica (Arduino), programação front-end
                (JS, HTML, CSS), design gráfico, manutenção de hardware,
                eletrônica e impressão 3D. Agora busco aperfeiçoar minhas
                habilidades e{" "}
                <span style={{ color: "var(--primary-red)" }}>
                  ingressar no segmento de desenvolvimento de software
                </span>
                , convido você à explorar meu mundo e encontrar as soluções que
                desenvolvi para os desafios que encontrei em minha jornada!
              </p>
              <div className="btn-box">
                <a href="#contactme-container">Me contrate!</a>
                <a href="#contactme-container">Vamos conversar!</a>
              </div>
            </div>
            <div className="home-sci">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/victor-principe-734638119/"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a target="_blank" href="https://www.github.com/azak-v">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
          <div className="imghero-container">
            <HomeImg />
          </div>
          {/* <span className="home-imgHover"></span> */}
        </section>
      )}
    </div>
  );
}

export default Home;
