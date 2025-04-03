import { useFavoriteContext } from "../../contexts/Favorito";
import styles from "./Favorites.module.css";

function Favorites() {
    const { favorite } = useFavoriteContext(); // Acessando a lista de favoritos
    console.log(favorite);

    return (
        <section className={styles.favorites}>
            {favorite.length > 0 ? (
                favorite.map((item) => (
                    <div key={item.id}>
                        <img src={item.imagem} alt={item.titulo} />
                    </div>
                ))
            ) : (
                <p>Nenhum item favoritado ainda.</p>
            )}
        </section>
    );
}

export default Favorites;
