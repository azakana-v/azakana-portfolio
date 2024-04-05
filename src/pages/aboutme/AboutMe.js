import Title from "../../components/title/Title";
import { useState } from "react";
import "./AboutMe.css";
import "boxicons";

function AboutMe() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div id="about_me">
      <Title title={"Sobre"} strong={"Mim"} />
      <img
        id="cover_photo"
        src="https://i.pinimg.com/736x/13/9e/08/139e08e8150bf0fbaf1584e22f76bd72.jpg"
        alt=""
      />
      <h2 id="subtitle">Font-End Developer e Professor STEM!</h2>
      <p style={isExtended ? { maxHeight: "110%" } : null} id="text">
        Sempre fui apaixonado por tecnologia, quando era criança abria
        computadores e brinquedos tentando entender como tudo aquilo funcionava
        por dentro. Meu primeiro contato com programação foi desenvolvendo um
        servidor de Minecraft para jogar com meus amigos em Java, depois de
        entender o super poder que era programar nunca mais consegui parar.
        Estudei C++ com Arduino e programação Front-End ainda no ensino médio,
        com esse conhecimento somado a minha experiência morando na Itália
        começei a ministrar aulas sobre o assunto durante 3 anos em 2
        instituições diferentes. Hoje em dia estudo Ánalise e Desenvolvimento de
        Sistemas na Fatec Praia Grande e busco me especializar em React.
      </p>

      <div id="button_box">
        <a onClick={() => setIsExtended(!isExtended)} id="btn">
          Leia mais!
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
