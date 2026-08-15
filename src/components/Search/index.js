import { useState, useMemo } from 'react';
import Cards from '../Cards';
import videos from '../../json/animes.json';
import styles from './Search.module.css';

function Search() {
  const [searchText, setSearchText] = useState('');

  const foundVideos = useMemo(() => {
    const termo = searchText.trim().toLowerCase();
    if (!termo) return videos;

    return videos.filter((video) => {
      const matchTitulo = video.titulo?.toLowerCase().includes(termo);
      const matchGenero = video.genero?.toLowerCase().includes(termo);
      return matchTitulo || matchGenero;
    });
  }, [searchText]);

  const handleClear = () => {
    setSearchText('');
  };

  const resultadoMensagem = searchText.trim()
    ? `${foundVideos.length} ${foundVideos.length === 1 ? 'anime encontrado' : 'animes encontrados'}`
    : '';

  return (
    <section className={styles.searchSection} aria-label="Busca de animes">
      <div className={styles.searchContainer}>
        <label htmlFor="anime-search-input" className={styles.visuallyHidden}>
          Pesquisar animes por título ou gênero
        </label>
        
        <div className={styles.inputWrapper}>
          <input
            id="anime-search-input"
            type="search"
            className={styles.searchInput}
            placeholder="Buscar por título ou gênero..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            aria-controls="search-results-list"
          />

          {searchText && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Limpar campo de busca"
            >
              &times;
            </button>
          )}
        </div>

        {/* Região anunciada para leitores de tela e feedback visual */}
        <div
          id="search-results-list"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={styles.statusMessage}
        >
          {resultadoMensagem}
        </div>
      </div>

      {foundVideos.length > 0 ? (
        <Cards cards={foundVideos} />
      ) : (
        <div className={styles.emptyState}>
          <p>Nenhum anime encontrado para "{searchText}".</p>
        </div>
      )}
    </section>
  );
}

export default Search;
