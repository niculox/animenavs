import { useParams } from "react-router-dom";
import anime from "../../json/animes.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./Anime.module.css";

function Anime(){

    const params = useParams();
    const inf = anime.find((inf) => { return inf.id === params.id; });

    return (
        <>
            <Header />
            <img src={inf.imagem} alt={inf.titulo}/>
            <div className={ style.anime }>
                
            </div>
            <Footer />
        </>
    );
}

export default Anime;