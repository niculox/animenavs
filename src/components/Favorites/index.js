import { Link } from 'react-router-dom';
import { useFavoriteContext } from '../../contexts/Favorito';
import styles from './Favorites.module.css';

function Favorites() {
  const { favorite = [] } = useFavoriteContext();

  return (
    <section className={styles.favoritesSection} aria-labelledby="favorites-title">
      <h2 id="favorites-title" className={styles.sectionTitle}>
        Meus Favoritos
      </h2>

      {favorite.length > 0 ? (
        <div className={styles.gridContainer} role="list" aria-label="Lista de animes favoritos">
          {favorite.map((item) => (
            <article key={item.id} className={styles.cardItem} role="listitem">
              <Link
                to={`/Anime/${item.id}`}
                className={styles.cardLink}
                aria-label={`Ver detalhes de ${item.titulo}`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={item.imagem}
                    alt={`Capa do anime ${item.titulo}`}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <div className={styles.titleOverlay}>
                    <span className={styles.animeTitle}>{item.titulo}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState} role="status" aria-live="polite">
          <p className={styles.emptyMessage}>Nenhum item favoritado ainda.</p>
          <Link to="/" className={styles.exploreLink}>
            Explorar animes
          </Link>
        </div>
      )}
    </section>
  );
}

export default Favorites;
