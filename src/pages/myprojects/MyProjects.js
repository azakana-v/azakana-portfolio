import "./MyProjects.css";
import Cardcontainer from "./cardcontainer/Cardcontainer";
import Title from "../../components/title/Title.js";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import lgpdImg from "../../assets/imgs/giflgpsportfolio.gif";
import triviumgpt from "../../assets/imgs/triviumgpt.gif";
import pokeapi from "../../assets/imgs/pokeapi.gif";
export default function MyProjects() {
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
    <div id="projects" className="myprojects-container">
      <Title title="Meus " strong="Projetos!" />
      <div className="swiper-container">
        {isMobile ? (
          <Swiper
            style={{ padding: "130px 0 40px 0" }}
            modules={[Navigation, Pagination]}
            // navigation
            loop={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="slide-container">
                <Cardcontainer
                  backgroundimage={triviumgpt}
                  gitlink="https://gptrivium.netlify.app"
                  title="TriviumGPT!"
                />
                <div className="slidedesc">
                  Sistema de Chatbot integrado com ChatGPT para auxiliar alunos
                  no desenvolvimento de projetos STEM, realizado em 3 dias,
                  conta com sistema de reconhecimento de fala, e responde apenas
                  questões relacionadas ao tema.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-container">
                <Cardcontainer
                  backgroundimage={lgpdImg}
                  gitlink="https://lgpdlock.com.br"
                  title="LGPD●LOCK!"
                />
                <div className="slidedesc">
                  Projeto completo e comercial de adequação de empresas à LGPD,
                  o software é capaz de gerar todos os documentos necessários
                  para uma completa adequação da empresa, conta com back-end
                  feito em firebase, front-end feito em React, sistema de login
                  e autenticação e sistema de chat-bot.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-container">
                <Cardcontainer
                  backgroundimage={pokeapi}
                  gitlink="https://pokedex-azakana.netlify.app"
                  title="PokeApi!"
                />
                <div className="slidedesc">
                  Projeto que simula uma "Pokedex", um catálogo virtual de
                  monstrinhos do jogo "Pokémon", realizei esse projeto para
                  testar minhas capacidades de desenvolvimento sem um Framework,
                  completamente feito com Javascript vanilla. Conta com pesquisa
                  de Pokèmon e mudança das fotos e nomes por meio de API.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            style={{
              width: "100%",
              padding: "130px",
              paddingTop: "130px",
              paddingRight: "0px",
              paddingBottom: "4%",
              paddingRight: "130px",
            }}
            modules={[Navigation, Pagination]}
            navigation
            loop={true}
            spaceBetween={190}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="slide-container">
                <Cardcontainer
                  backgroundimage={triviumgpt}
                  gitlink="https://gptrivium.netlify.app/"
                  title="TriviumGPT!"
                />
                <div className="slidedesc">
                  Sistema de Chatbot integrado com ChatGPT para auxiliar alunos
                  no desenvolvimento de projetos STEM, realizado em 3 dias,
                  conta com sistema de reconhecimento de fala, e responde apenas
                  questões relacionadas ao tema.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <Cardcontainer
                  backgroundimage={lgpdImg}
                  gitlink="https://lgpdlock.com.br"
                  title="LGPD●LOCK!"
                />
                <div className="slidedesc">
                  Projeto completo e comercial de adequação de empresas à LGPD,
                  o software é capaz de gerar todos os documentos necessários
                  para uma completa adequação da empresa, conta com back-end
                  feito em firebase, front-end feito em React, sistema de login
                  e autenticação e sistema de chat-bot.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-container">
                <Cardcontainer
                  backgroundimage={pokeapi}
                  gitlink="https://pokedex-azakana.netlify.app"
                  title="PokeApi!"
                />
                <div className="slidedesc">
                  Projeto que simula uma "Pokedex", um catálogo virtual de
                  monstrinhos do jogo "Pokémon", realizei esse projeto para
                  testar minhas capacidades de desenvolvimento sem um Framework,
                  completamente feito com Javascript vanilla. Conta com pesquisa
                  de Pokèmon e mudança das fotos e nomes por meio de API.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </div>
  );
}
