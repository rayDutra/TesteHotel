import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import '../../../css/styles.css';

// import required modules
import { Navigation, Autoplay} from "swiper";

import maiara from "../../../img/mamaes/maiaraa.jpg";
import taciane from "../../../img/mamaes/tacianee.jpeg";
import karina from "../../../img/mamaes/karina.jpeg";



export default function Depoimento() {

   
    return (
        <section className="sectionDepoimentos">

            <div className="tituloDepoimento">

                <h1>{titulosDescrisoesSecoes.depoimentos.titulo}</h1>
                <hr className="linhaTitulo" />
                <p>{titulosDescrisoesSecoes.depoimentos.descricao}</p>
            </div>

            <div className="containerSwiper">
                <>
                    <Swiper navigation={true} modules={[Navigation,Autoplay]} className="mySwiper"
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}

                    >
                        <SwiperSlide>  <div className="depoimentos">
                            <div className="mamaes">
                                <div>
                                    <p className="nomeMamae">Mamãe: Maiara Reis</p>
                                    <p className="coracoesDepoimento">♥♥♥♥♥</p>
                                </div>
                            </div>

                            <div className="imagemDepoimento">
                            <img src={maiara} alt="" />
                            </div>

                            <div className="avaliacoes">
                                <p className="nomeMamae">Filhas:</p>
                                <p className="nomeMamae">Sophia e Luiza Helena</p>
                                <p className="depoimentoP">
                                    “Super indico, muito atenciosas, cuidadosas, minhas filhas amam ir pra escolinha. Eu só tenho a agradecer.”
                                </p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>
                        <div className="depoimentos">
                            <div className="mamaes">
                                <div>
                                <p className="nomeMamae">Mamãe: Taciane</p>
                                <p className="coracoesDepoimento">♥♥♥♥♥</p>
                                </div>
                            </div>

                            <div className="imagemDepoimento" >
                            <img src={karina} alt="" />
                            </div>

                            <div className="avaliacoes">
                            <p className="nomeMamae">Filha:</p>
                            <p className="nomeMamae">Ana Liz</p>
                            <p className="depoimentoP">
                                “Uma escolinha excelente com aconchego familiar... Minha filha é amada e muito bem cuidada.”
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="depoimentos">
                            <div className="mamaes">
                                <div>
                                <p className="nomeMamae">Mamãe: Taciane</p>
                                <p className="coracoesDepoimento">♥♥♥♥♥</p>
                                </div>
                            </div>

                            <div className="imagemDepoimento">
                            <img src={taciane} alt="" />
                            </div>

                            <div className="avaliacoes">
                            <p className="nomeMamae">Filha:</p>
                            <p className="nomeMamae">Ana Liz</p>
                            <p className="depoimentoP">
                                “Local seguro e confiável para deixar meu filho durante o trabalho, com horário flexível e atendimento durante dezembro e janeiro. As cuidadoras tratam as crianças com respeito, carinho e nos mantêm informados sobre a rotina. Profissionais altamente competentes e, acima de tudo, humanas.”
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>

                    </Swiper>
                </>
            </div>
        </section>
    );
}