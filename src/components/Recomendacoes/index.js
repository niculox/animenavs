import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import rec from '../../json/animes.json';
import styles from './Recomendacoes.module.css';

function Recomendacoes() {
  // Embaralha uma cópia do array e seleciona 6 itens apenas uma vez
  const animesAleatorios = useMemo(() => {
    if (!Array.isArray(rec)) return [];
    return [...rec].sort(() => Math.random() - 0.5).slice(0, 6);
  }, []);

  return (
    <section className={styles.sectionContainer} aria-label="Recomendações de animes">
      <div className={styles.grid}>
        {animesAleatorios.map((r) => (
          <article key={r.id} className={styles.cardItem}>
            <Link
              to={`/Anime/${r.id}`}
              className={styles.cardLink}
              aria-label={`Ver detalhes de ${r.titulo}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={r.imagem}
                  alt={`Capa do anime ${r.titulo}`}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.titleOverlay}>
                  <span className={styles.cardTitle}>{r.titulo}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Recomendacoes;
