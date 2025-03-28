import Header from "../../components/Header"; 
import Footer from "../../components/Footer"; 
import style from "./Indication.module.css"; 
import Estrelas from "../../components/Estrelas";
import React from 'react';
import { useAnime } from '../../components/SectionRec';

function Indication(){

    const currentAnime = useAnime();
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
