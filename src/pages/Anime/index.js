import { useParams } from "react-router-dom";
import anime from "../../json/animes.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./Anime.module.css";
import estrela from "./estrela.png";

function Anime() {
    const params = useParams();
    const inf = anime.find((inf) => String(inf.id) === params.id);

    return (
        <>
            <Header />
            <div className={style.anime}>
                <img src={inf.imagem} alt={inf.titulo} />
                <h1>{inf.titulo}</h1>
                <ContaEstrelas estrelas={inf.estrelas} />
                <p>{inf.descricao}</p>
            </div>
            <Footer />
        </>
    );
}

function ContaEstrelas({ estrelas }) {
    const totalEstrelas = 5;

    return (
        <section>
            {[...Array(totalEstrelas)].map((_, index) => (
                <img 
                    key={index} 
                    src={estrela} 
                    alt="estrela" 
                    style={{ 
                        width: "24px", 
                        opacity: index < estrelas ? 1 : 0.3 
                    }} 
                />
            ))}
        </section>
    );
}

export default Anime;
