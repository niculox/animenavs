import { useFavoriteContext } from "../../contexts/Favorito";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";

function Favorites() {
    const { favorite } = useFavoriteContext(); // Acessando a lista de favoritos
    console.log(favorite);

    return (
        <section className={styles.favorites}>
            {favorite.length > 0 ? (
                favorite.map((item) => (
                        <Link to={`/Anime/${item.id}`} key={item.id} className={styles.card}>
                            <img src={item.imagem} alt={item.titulo} />
                        </Link>
                ))
            ) : (
                <p>Nenhum item favoritado ainda.</p>
            )}
        </section>
    );
}

export default Favorites;
