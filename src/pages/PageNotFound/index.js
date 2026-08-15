import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import erro404 from './imgnotfound.png';
import styles from './PageNotFound.module.css';

function PageNotFound() {
  useEffect(() => {
    document.title = '404 - Página Não Encontrada | Anime Navs';
  }, []);

  return (
    <div className={styles.pageLayout}>
      <Header />

      <main className={styles.mainContainer} id="main-content" role="alert">
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer} aria-hidden="true">
            <img
              src={erro404}
              alt=""
              className={styles.rotatingImage}
              loading="eager"
            />
          </div>

          <h1 className={styles.codeTitle}>Erro 404</h1>
          <h2 className={styles.messageSubtitle}>Página não encontrada</h2>
          <p className={styles.description}>
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>

          <Link to="/" className={styles.homeButton}>
            Voltar para o início
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PageNotFound;
