import { createContext, useContext, useState } from "react";
import Lista from "../json/animes.json";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function Favorito({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

// HOOK
export function useFavoriteContext() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavoriteContext must be used within a Favorito provider");
    }
    const { favorite, setFavorite } = context;

    function addFavorito(newFavorito) {
        const repeatedFavorite = favorite.some((item) => item.id === newFavorito.id);
        let newList = [...favorite];

        if (!repeatedFavorite) {
            newList.push(newFavorito);
            return setFavorite(newList);
        }

        newList = favorite.filter((fav) => fav.id !== newFavorito.id);
        return setFavorite(newList);
    }

    return {
        favorite,
        addFavorito // Certifique-se de que o nome aqui é o mesmo que você está chamando
    };
}