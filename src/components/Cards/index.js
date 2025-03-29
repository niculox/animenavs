import { Link } from "react-router-dom";
import { useState } from "react"; // Importando useState
import cards from "../../json/animes.json";
import style from "./Cards.module.css";

function Cards() {
    const [titulo, setTitulo] = useState(""); // Estado para armazenar o título

    const mostrarTitulo = (titulo) => {
        setTitulo(titulo); // Define o título quando o mouse está sobre a imagem
    };

    const esconderTitulo = () => {
        setTitulo(""); // Limpa o título quando o mouse sai da imagem
    };

    return (
        <section className={style.card}>
            {cards.map((card) => (
                <Link to={`Anime/${card.id}`} key={card.id}>
                    <div 
                        className={style.cardContainer} // Adicionando uma classe para o contêiner
                        onMouseOver={() => mostrarTitulo(card.titulo)} 
                        onMouseOut={esconderTitulo}
                    >
                        <img src={card.imagem} alt={card.titulo} />
                        {titulo === card.titulo && (
                            <div className={style.titulo}>
                                {card.titulo}
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </section>
    );
}

export default Cards;
