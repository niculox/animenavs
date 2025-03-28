import styles from "./Teste.module.css";
import React from 'react';
import { useAnime } from '../../components/SectionRec';

function Teste(){
    const currentAnime = useAnime();
    if (!currentAnime) return null;

    return (
        <>
            <div className={styles.teste}>
                <img src={currentAnime.imagem} alt={currentAnime.titulo} />
                <h2>{currentAnime.titulo}</h2>
            </div>
        </>
    );
}

export default Teste;
