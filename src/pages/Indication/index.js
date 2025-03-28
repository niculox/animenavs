import { useState, useEffect } from "react";
import anime from "../../json/animes.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./Indication.module.css";
import Estrelas from "../../components/Estrelas";

function Indication() {

    //array anime
    const [currentAnime, setCurrentAnime] = useState(null);
    //indica um anime a cada semana
    useEffect(() => {
        const currentWeek = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
        const animeIndex = currentWeek % anime.length;
        setCurrentAnime(anime[animeIndex]);
    }, []);

    if (!currentAnime) return null;

    return (
        <>
            <Header />
            <div className={style.indication}>
                <img src={currentAnime.imagem} alt={currentAnime.titulo} className={style.imagem} />
                <h1>{currentAnime.titulo}</h1>
                <Estrelas estrelas={currentAnime.estrelas} />
                <p>{currentAnime.descricao}</p>
            </div>
            <Footer />
        </>
    );
}

export default Indication;
