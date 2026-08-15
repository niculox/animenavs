import { Link } from 'react-router-dom';
import style from './Cards.module.css';
import favorito from '../../assets/iconfav/2.png';
import ufavorito from '../../assets/iconfav/1.png';
import { useFavoriteContext } from '../../contexts/Favorito';

function Cards({ cards = [] }) {
  const { favorite, addFavorito } = useFavoriteContext();

  return (
    <section className={style.gridSection} aria-label="Lista de animes">
      {cards.map((card) => {
        const isFavorite = favorite.some((fav) => fav.id === card.id);

        const handleFavoriteClick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          addFavorito({
            id: card.id,
            imagem: card.imagem,
            titulo: card.titulo,
          });
        };

        return (
          <article key={card.id} className={style.cardItem}>
            <Link
              to={`/Anime/${card.id}`}
              className={style.cardLink}
              aria-label={`Ver detalhes de ${card.titulo}`}
            >
              <div className={style.imageWrapper}>
                <img
                  src={card.imagem}
                  alt={`Capa do anime ${card.titulo}`}
                  className={style.cardImage}
                  loading="lazy"
                />
                <div className={style.titleOverlay}>
                  <h3 className={style.titulo}>{card.titulo}</h3>
                </div>
              </div>
            </Link>

            <button
              type="button"
              className={style.favButton}
              onClick={handleFavoriteClick}
              aria-pressed={isFavorite}
              aria-label={
                isFavorite
                  ? `Remover ${card.titulo} dos favoritos`
                  : `Adicionar ${card.titulo} aos favoritos`
              }
            >
              <img
                src={isFavorite ? favorito : ufavorito}
                alt=""
                aria-hidden="true"
                className={style.favIcon}
              />
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default Cards;
