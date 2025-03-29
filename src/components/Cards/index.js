import { Link } from "react-router-dom";
import cards from "../../json/animes.json";
import style from "./Cards.module.css";


function Cards(){
    return (
        <section className={style.card}>
            {cards.map((card) => (
                <Link to={`Anime/${card.id}`}>
                    <img key={card.id} src={card.imagem} alt={card.titulo}/>
                    
                </Link>
            ))}
        </section>
    );
}

//function mostrarTitulo(id){}

export default Cards;
