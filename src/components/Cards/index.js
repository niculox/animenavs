import cards from "../../json/animes.json";
import style from "./Cards.module.css";

function Cards(){
    return (
        <section className={style.card}>
            {cards.map((card) => (
                <img key={card.id} src={card.imagem} alt={card.titulo}/>
            ))}
        </section>
    );
}

export default Cards;
