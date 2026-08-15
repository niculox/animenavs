import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import animes from '../../json/animes.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Estrelas from '../../components/Estrelas';
import styles from './Anime.module.css';

function Anime() {
  const { id } = useParams();
  const animeInfo = animes.find((item) => String(item.id) === String(id));

  // Atualiza o título da aba do navegador para acessibilidade
  useEffect(() => {
    if (animeInfo) {
      document.title = `${animeInfo.titulo} | Anime Navs`;
    } else {
      document.title = 'Anime não encontrado | Anime Navs';
    }
  }, [animeInfo]);

  return (
    <div className={styles.pageLayout}>
      <Header />

      <main className={styles.mainContainer} id="main-content">
        {animeInfo ? (
          <article className={styles.animeArticle}>
            <div className={styles.bannerWrapper}>
              <img
                src={animeInfo.imagem}
                alt={`Capa do anime ${animeInfo.titulo}`}
                className={styles.bannerImage}
                loading="eager"
              />
            </div>

            <div className={styles.content}>
              <h1 className={styles.titulo}>{animeInfo.titulo}</h1>

              <div className={styles.ratingWrapper}>
                <Estrelas estrelas={animeInfo.estrelas} />
              </div>

              <div className={styles.sinopseSection}>
                <h2 className={styles.sectionHeading}>Sinopse</h2>
                <p className={styles.descricao}>{animeInfo.descricao}</p>
              </div>
            </div>
          </article>
        ) : (
          <div className={styles.notFound} role="alert">
            <h2>Anime não encontrado</h2>
            <p>O anime que você procura não existe ou foi removido.</p>
            <Link to="/" className={styles.backButton}>
              Voltar para o início
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Anime;
