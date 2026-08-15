import { useEffect } from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import styles from './Home.module.css';

function Home() {
  useEffect(() => {
    document.title = 'Home | Anime Navs';
  }, []);

  return (
    <div className={styles.pageLayout}>
      <Header />

      <main id="main-content" className={styles.mainContent}>
        <Container />
        <Search />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
