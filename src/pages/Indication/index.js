import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Estrelas from '../../components/Estrelas';
import { useAnime } from '../../components/SectionRec'; 
import styles from './Indication.module.css';

function Indication() {
  const currentAnime = useAnime();

  useEffect(() => {
    if (currentAnime) {
      document.title = `Weekly Indication - ${currentAnime.titulo} | Anime Navs`;
    } else {
      document.title = 'Weekly Indication | Anime Navs';
    }
  }, [currentAnime]);

  return (
    <div className={styles.pageLayout}>
      <Header />

      <main className={styles.mainContainer} id="main-content">
        {currentAnime ? (
          <article className={styles.article}>
            <header className={styles.headerArea}>
              <span className={styles.badge}>Indicação da Semana</span>
              <h1 className={styles.title}>{currentAnime.titulo}</h1>
            </header>

            <div className={styles.bannerWrapper}>
              <img
                src={currentAnime.imagem}
                alt={`Capa de destaque do anime ${currentAnime.titulo}`}
                className={styles.bannerImage}
                loading="eager"
              />
            </div>

            <div className={styles.detailsContent}>
              <div className={styles.ratingArea}>
                <Estrelas estrelas={currentAnime.estrelas} />
              </div>

              <section className={styles.sinopseSection} aria-label="Sinopse">
                <h2 className={styles.sinopseHeading}>Sinopse</h2>
                <p className={styles.descricao}>{currentAnime.descricao}</p>
              </section>
            </div>
          </article>
        ) : (
          <div className={styles.emptyState} role="status" aria-live="polite">
            <p>Carregando a indicação semanal...</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Indication;
