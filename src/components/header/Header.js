import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    let lastScroll = 0;

    const listenScrollEvent = () => {
      if (window.scrollY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY == 0) {
        setScrollDirection("top");
      } else if (lastScroll > window.scrollY) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      console.log(window.scrollY);
      lastScroll = window.scrollY;
      console.log(scrollDirection);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", listenScrollEvent);
    listenScrollEvent();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        scrollDirection === "top" ? (
          <header className={isScrolled ? "mobile scrolled" : "mobile"}>
            <a
              style={isClicked ? { color: "var(--bg-color)" } : null}
              href="#"
              className="logo"
            >
              Azak.
            </a>
            <button onClick={() => setIsClicked(!isClicked)}>
              {isClicked ? (
                <div
                  style={{
                    backgroundColor: "var(--primary-red)",
                  }}
                >
                  <i
                    style={{
                      backgroundColor: "var(--primary-red)",
                      color: "var(--background-color)",
                      border: "2px solid var(--primary-red)",
                    }}
                    class="bx bx-menu-alt-right bx-tada-hover"
                  ></i>
                  <div className="mobile-menu">
                    <nav className="mobile-navbar">
                      <a href="#about_me">Sobre</a>
                      <a href="##myskills-container">Habilidades </a>
                      <a href="#projects">Projetos </a>
                      <a href="#professionalxp">Experiencias </a>
                      <a className="active" href="#contactme-container">
                        Contate Me!{" "}
                      </a>
                    </nav>
                  </div>
                </div>
              ) : (
                <i class="bx bx-menu bx-tada-hover"></i>
              )}
            </button>
          </header>
        ) : scrollDirection === "up" ? (
          <header className={isScrolled ? "mobile scrolled" : "mobile"}>
            <a
              style={isClicked ? { color: "var(--bg-color)" } : null}
              href="#"
              className="logo logo-scrolled"
            >
              Azak.
            </a>
            <button onClick={() => setIsClicked(!isClicked)}>
              {isClicked ? (
                <div
                  style={{
                    backgroundColor: "var(--primary-red)",
                  }}
                >
                  <i
                    style={{
                      backgroundColor: "var(--primary-red)",
                      color: "var(--background-color)",
                      border: "2px solid var(--primary-red)",
                    }}
                    class="bx bx-menu-alt-right bx-tada-hover"
                  ></i>
                  <div className="mobile-menu">
                    <nav className="mobile-navbar nothover">
                      <a href="#about_me">Sobre </a>
                      <a href="#education">Habilidades </a>
                      <a href="#skills">Projetos </a>
                      <a href="#contact">Experiencias </a>
                      <a href="#contactme-container">Contate Me!</a>
                    </nav>
                  </div>
                </div>
              ) : (
                <i class="bx bx-menu bx-tada-hover"></i>
              )}
            </button>
          </header>
        ) : null
      ) : scrollDirection === "top" ? (
        <header className={isScrolled ? "scrolled" : null}>
          <a href="#" className="logo">
            Azak.
          </a>
          <nav className="navbar">
            <a href="#about_me">Sobre</a>
            <a href="#myskills-container">Habilidades </a>
            <a href="#projects">Projetos </a>
            <a href="#professionalxp">Experiencias</a>
            <a className="active" href="#contactme-container">
              Contate Me!
            </a>
          </nav>
        </header>
      ) : scrollDirection === "up" ? (
        <header className={isScrolled ? "scrolled" : null}>
          <a href="#" className="logo logo-scrolled">
            Azak.
          </a>
          <nav className="navbar nothover">
            <a href="#about_me">Sobre</a>
            <a href="#myskills-container">Habilidades </a>
            <a href="#projects">Projetos </a>
            <a href="#professionalxp">Experiencias</a>
            <a href="#contactme-container">Contate Me!</a>
          </nav>
        </header>
      ) : null}
    </div>
  );
}

export default Header;
