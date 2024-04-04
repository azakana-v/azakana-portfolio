import { React, useRef } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header.js";
import AboutMe from "./pages/aboutme/AboutMe.js";
import "boxicons";
import Skills from "./pages/myskills/Skills";
import { ContactMe } from "./pages/contactme/ContactMe";
import MyProjects from "./pages/myprojects/MyProjects";
import ProfessionalXp from "./pages/professionalxp/ProfessionalXp";
import { useInView } from "react-intersection-observer";
import HomeImg from "./components/homeimg/HomeImg";

function App() {
  const { ref: bundao, inView: bundaoIsVisible } = useInView();

  const handleClick = () => {
    bundao.current.scrollIntoView({ behavior: "smooth" });
    console.log("teste");
  };

  return (
    <div>
      <Header />
      <Home />
      {/* <button onClick={handleClick}>teste</button>
      <div ref={bundao}> {bundaoIsVisible ? handleClick : ""} </div> */}
      <AboutMe />
      <Skills />
      <MyProjects />
      <ProfessionalXp />
      <ContactMe />
    </div>
  );
}

export default App;
