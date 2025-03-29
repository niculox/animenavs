import { Link } from "react-router-dom";
import { useState } from "react";
import rec from "../../json/animes.json";
import style from "./Recomendacoes.module.css";

function Recomendacoes(){
    const [titulo, setTitulo] = useState(""); // Estado para armazenar o título
    
    const mostrarTitulo = (titulo) => {
        setTitulo(titulo); // Define o título quando o mouse está sobre a imagem
    };
    
    const esconderTitulo = () => {
        setTitulo(""); // Limpa o título quando o mouse sai da imagem
    };

    return (
        <div className={style.recomendacoes}>
            {rec.map((r) => (
                <Link to={`/Anime/${r.id}`} key={r.id}>
                    <div 
                        className={style.cardContainer} // Adicionando uma classe para o contêiner
                        onMouseOver={() => mostrarTitulo(r.titulo)} 
                        onMouseOut={esconderTitulo}
                    >
                        <img src={r.imagem} alt={r.titulo} />
                        {titulo === r.titulo && (
                            <div className={style.titulo}>
                                {r.titulo}
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Recomendacoes;
