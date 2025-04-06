import style from "./Search.module.css";
import Cards from "../Cards";
import { useState } from "react";
import videos from "../../json/animes.json";

function filtro(videos, searchText) {
    return videos.filter((video) => {
        return video.titulo.toLowerCase().includes(searchText.toLowerCase()) || 
               video.genero.toLowerCase().includes(searchText.toLowerCase());
    });
}

function Search() {
    const [searchText, setSearchText] = useState(""); // Estado para armazenar o texto de busca

    // Filtrando os vídeos com base no texto de busca
    const foundVideos = searchText ? filtro(videos, searchText) : videos; // Se searchText estiver vazio, use a lista completa

    return (
        <section className={style.search}>
            <input 
                type="text" 
                placeholder="Procurar..." 
                value={searchText} 
                onChange={e => setSearchText(e.target.value)} 
            />
            <Cards cards={foundVideos} /> {/* Passando os vídeos filtrados ou a lista completa */}
        </section>
    );
}

export default Search;
