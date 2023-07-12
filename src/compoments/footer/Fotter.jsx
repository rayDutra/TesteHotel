import wpp from "../../img/wpp.png";
import insta from "../../img/insta.png";

export default function Footer() {
    return (
       <footer className="sectionFooter">
            <div className="imgFooter">
                        <div className="img2"><img className="imgQuemSomos" src={wpp} alt="descrição da imagem" /></div>
                        <div className="img3"><img className="imgQuemSomos" src={insta} alt="descrição da imagem" /></div>
            </div>
            <div className="textFooter">
                        <div><p>R. Alberto Alves Cabral, 744 - Santa Mônica</p></div>
                        <div><p>(34) 98839-4316</p></div>
            </div>
       </footer>
    );
}