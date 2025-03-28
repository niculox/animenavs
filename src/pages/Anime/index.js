import { useParams } from "react-router-dom";
import anime from "../../json/animes.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./Anime.module.css";
import estilo from "./Anime.module.css";
import Estrelas from "../../components/Estrelas";

function Anime() {
    const params = useParams();
        const inf = anime.find((inf) => String(inf.id) === params.id);

    return (
        <>
            <Header />
            <div className={style.anime}>
                <img src={inf.imagem} alt={inf.titulo} className={estilo.imagem}/>
                <h1>{inf.titulo}</h1>
                <Estrelas estrelas={inf.estrelas} />
                <p>{inf.descricao}</p>
            </div>
            <Footer />
        </>
    );
}

export default Anime;
