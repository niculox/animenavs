import React, { createContext, useContext, useState, useEffect } from 'react';
import animeData from '../../json/animes.json';

const AnimeContext = createContext();

function SectionRec(){
    return (
        <></>
    );
}

export const AnimeProvider = ({ children }) => {
    const [currentAnime, setCurrentAnime] = useState(null);

    useEffect(() => {
        const currentWeek = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
        const animeIndex = currentWeek % animeData.length;
        setCurrentAnime(animeData[animeIndex]);
    }, []);

    return (
        <AnimeContext.Provider value={currentAnime}>
            {children}
        </AnimeContext.Provider>
    );
};

export const useAnime = () => {
    return useContext(AnimeContext);
};
