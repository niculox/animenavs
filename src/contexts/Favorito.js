import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const STORAGE_KEY = '@AnimeNavs:favoritos';

export const FavoritesContext = createContext(undefined);
FavoritesContext.displayName = 'MyFavorites';

export default function FavoritoProvider({ children }) {
  // Inicialização preguiçosa buscando dados do localStorage
  const [favorite, setFavorite] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erro ao carregar favoritos do localStorage:', error);
      return [];
    }
  });

  // Salva alterações no localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorite));
    } catch (error) {
      console.error('Erro ao salvar favoritos no localStorage:', error);
    }
  }, [favorite]);

  // Função toggle (adiciona ou remove)
  const addFavorito = useCallback((newFavorito) => {
    if (!newFavorito || !newFavorito.id) return;

    setFavorite((prevFavorites) => {
      const exists = prevFavorites.some((item) => item.id === newFavorito.id);

      if (exists) {
        // Remove dos favoritos
        return prevFavorites.filter((item) => item.id !== newFavorito.id);
      }

      // Adiciona aos favoritos
      return [...prevFavorites, newFavorito];
    });
  }, []);

  // Helper opcional para checagem rápida
  const isFavorite = useCallback(
    (id) => favorite.some((item) => item.id === id),
    [favorite]
  );

  const value = useMemo(
    () => ({
      favorite,
      addFavorito,
      isFavorite,
    }),
    [favorite, addFavorito, isFavorite]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook de consumo
export function useFavoriteContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoriteContext deve ser utilizado dentro de um FavoritoProvider');
  }
  return context;
}
