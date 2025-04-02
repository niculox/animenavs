import { useFavoriteContext } from "../../contexts/Favorito";
import Cards from "../Cards";
import styles from "./Favorites.module.css";

function Favorites(){

    const {favorite} = useFavoriteContext();

    return (
        <section className={styles.favorites}>
            <h1>Favoritos</h1>
            <div>
                {
                    
                }
            </div>
        </section>
    );
}

export default Favorites;