import { useEffect, useState } from "react";
import { Sendbutton } from "../../components/sendbutton/Sendbutton";
import Title from "../../components/title/Title";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedInput, setSelectedInput] = useState(null);

  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [tel, setTel] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
      tel: tel,
    };

    emailjs
      .send(
        "service_x75sd48",
        "template_067r1eb",
        templateParams,
        "CRqUWN_xj6djgSCNA"
      )
      .then(
        (response) => {
          console.log("Email Enviado!", response.status, response.text);
          setEmail("");
          setNome("");
          setTel("");
          setMensagem("");
        },
        (err) => {
          console.log("Erro!", err);
        }
      );
  }

  const handleInputClick = (inputId) => {
    setSelectedInput(inputId);
  };

  const handleContainerClick = () => {
    setSelectedInput(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectedInput &&
        event.target !== document.getElementById(`input-${selectedInput}`)
      ) {
        setSelectedInput(null);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [selectedInput]);

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
    <div id="contactme-container">
      <Title title={"Contate"} strong={"Me!"} />
      <div className="email-container">
        <div id="email-icon">
          <i className="bx bxs-envelope"></i>
        </div>
        <h1 id="email-adress">victorprincipe1@hotmail.com</h1>
      </div>
      <div className="whats-container">
        <div id="whats-icon">
          <i className="bx bxl-whatsapp"></i>
        </div>
        <a
          target="blank"
          href="https://wa.me//5513988245766?text=Ol%C3%A1!%20Venho%20atrav%C3%A9s%20do%20seu%20portfolio."
        >
          <h1 id="whats-adress">Envie uma mensagem!</h1>
        </a>
      </div>

      <span id="or-component">ou...</span>
      {isMobile ? (
        <form onSubmit={sendEmail}>
          <div id="row1">
            <input
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              id="input-1"
              className={selectedInput === 1 ? "input clicked" : "input"}
              onClick={() => handleInputClick(1)}
              type="text"
              placeholder="Nome completo"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="input-2"
              className={selectedInput === 2 ? "input clicked" : "input"}
              onClick={() => handleInputClick(2)}
              type="email"
              placeholder="E-mail"
            />
            <input
              onChange={(e) => setTel(e.target.value)}
              value={tel}
              id="input-3"
              className={selectedInput === 3 ? "input clicked" : "input"}
              onClick={() => handleInputClick(3)}
              type="tel"
              placeholder="Telefone (opcional)"
            />
            <textarea
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
              id="input-4"
              className={selectedInput === 4 ? "input clicked" : "input"}
              onClick={() => handleInputClick(4)}
              placeholder="Digite a sua mensagem aqui..."
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <Sendbutton position={["510px", "200px", "auto", "auto"]} />
        </form>
      ) : (
        <form onSubmit={sendEmail}>
          <div id="row1">
            <input
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              id="input-1"
              className={selectedInput === 1 ? "input clicked" : "input"}
              onClick={() => handleInputClick(1)}
              type="text"
              placeholder="Nome completo"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="input-2"
              className={selectedInput === 2 ? "input clicked" : "input"}
              onClick={() => handleInputClick(2)}
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div id="row2">
            <input
              onChange={(e) => setTel(e.target.value)}
              value={tel}
              id="input-3"
              className={selectedInput === 3 ? "input clicked" : "input"}
              onClick={() => handleInputClick(3)}
              type="tel"
              placeholder="Telefone (opcional)"
            />
            <textarea
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
              id="input-4"
              className={selectedInput === 4 ? "input clicked" : "input"}
              onClick={() => handleInputClick(4)}
              placeholder="Digite a sua mensagem aqui..."
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <Sendbutton position={["285px", "auto", "auto", "auto"]} />
        </form>
      )}
    </div>
  );
};
