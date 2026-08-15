import { createContext, useContext, useMemo } from 'react';
import animeData from '../../json/animes.json';

const AnimeContext = createContext(null);

function getWeeklyAnime() {
  if (!Array.isArray(animeData) || animeData.length === 0) {
    return null;
  }
  const currentWeek = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
  const animeIndex = currentWeek % animeData.length;
  return animeData[animeIndex];
}

export const AnimeProvider = ({ children }) => {
  // Inicializa já com o valor calculado, eliminando o delay do useEffect
  const currentAnime = useMemo(() => getWeeklyAnime(), []);

  return (
    <AnimeContext.Provider value={currentAnime}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnime = () => {
  const context = useContext(AnimeContext);
  
  // Garante que o desenvolvedor identifique erros de encapsulamento no Provider
  if (context === undefined) {
    throw new Error('useAnime deve ser utilizado dentro de um AnimeProvider');
  }
  
  return context;
};
