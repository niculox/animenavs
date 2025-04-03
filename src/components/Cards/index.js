import { Link } from "react-router-dom";
import { useState } from "react";
import cards from "../../json/animes.json";
import style from "./Cards.module.css";
import favorito from "../../assets/iconfav/2.png";
import ufavorito from "../../assets/iconfav/1.png";
import { useFavoriteContext } from "../../contexts/Favorito";

function Cards() {
    const [titulo, setTitulo] = useState("");
    const { favorite, addFavorito } = useFavoriteContext(); // Certifique-se de que o nome está correto

    const mostrarTitulo = (titulo) => {
        setTitulo(titulo);
    };

    const esconderTitulo = () => {
        setTitulo("");
    };

    return (
        <section className={style.card}>
            {cards.map((card) => {
                const isFavorite = favorite.some((fav) => fav.id === card.id);
                const icone = isFavorite ? favorito : ufavorito;

                return (
                    <Link to={`Anime/${card.id}`} key={card.id}>
                        <div 
                            className={style.cardContainer}
                            onMouseOver={() => mostrarTitulo(card.titulo)} 
                            onMouseOut={esconderTitulo}
                        >
                            <img src={card.imagem} alt={card.titulo} />
                            {titulo === card.titulo && (
                                <div className={style.titulo}>
                                    {card.titulo}
                                </div>
                            )}
                            <figure className={style.fav}>
                                <img 
                                    src={icone} 
                                    alt="coração-favorito" 
                                    onClick={() => addFavorito({ id: card.id, imagem: card.imagem, titulo: card.titulo })}
                                />
                            </figure>
                        </div>
                    </Link>
                );
            })}
        </section>
    );
}

export default Cards;
