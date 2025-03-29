import { Link } from "react-router-dom";
import rec from "../../json/animes.json";
import style from "./Recomendacoes.module.css";

function Recomendacoes() {


    // Função para embaralhar a lista de animes
    const embaralharAnimes = (animes) => {
        return animes.sort(() => Math.random() - 0.5);
    };

    // Obter 9 animes aleatórios
    const animesAleatorios = embaralharAnimes(rec).slice(0, 6);

    return (
        <div className={style.recomendacoes}>
            {animesAleatorios.map((r) => (
                <Link to={`/Anime/${r.id}`} key={r.id}>
                        <img src={r.imagem} alt={r.titulo} />
                </Link>
            ))}
        </div>
    );
}

export default Recomendacoes;
