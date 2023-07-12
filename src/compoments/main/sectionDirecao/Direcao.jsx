import TituloSubtitulo from "../commom/DirecaoCommom";
import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes"
import direcao from "../../../img/direcao.jpg";
export default function Direcao() {
  

    return (
        <section className="sectionDirecao" id="direcao">
            <div className="containerDirecao">
                <div className="tituloDirecao">

                    <h1>{titulosDescrisoesSecoes.direcao.titulo}</h1>
                    <hr className="linhaTitulo" />
                    <p>{titulosDescrisoesSecoes.direcao.descricao}</p>

                </div>
                <div className="direcao">
                    <div className="imagemDirecao">
                    <img src={direcao} alt="" />
                    </div>
                    <div className="infoDirecao">
                        <p>Meu nome é Ana Cláudia, sou diretora e responsável pela instituição. Sou formada em Pedagogia e pós-graduada em Educação Especial e Atendimento Especializado. Desenvolvo meu trabalho com amor e dedicação, prezando pelo cuidado e transformação de cada criança. Sou grata a Deus pela oportunidade de fazer a diferença na vida delas, contando com o apoio dos meus pais, Luis Carlos e Elena Yara. Juntos, temos a missão de proporcionar conhecimento a cada criança.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}