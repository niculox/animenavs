import { useMemo, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Favorites from '../../components/Favorites';
import Recomendacoes from '../../components/Recomendacoes';
import { useAuth } from '../../provider/AuthContext';
import styles from './MyPage.module.css';

import icon1 from '../../assets/icons/icon1.jpg';
import icon2 from '../../assets/icons/icon2.jpg';
import icon3 from '../../assets/icons/icon3.jpg';
import icon4 from '../../assets/icons/icon4.jpg';
import icon5 from '../../assets/icons/icon5.jpg';
import icon6 from '../../assets/icons/icon6.jpg';
import icon7 from '../../assets/icons/icon7.jpg';
import icon8 from '../../assets/icons/icon8.jpg';
import icon9 from '../../assets/icons/icon9.jpg';
import icon10 from '../../assets/icons/icon10.jpg';
import icon11 from '../../assets/icons/icon11.jpg';
import icon12 from '../../assets/icons/icon12.jpg';
import icon13 from '../../assets/icons/icon13.jpg';
import icon14 from '../../assets/icons/icon14.jpg';
import icon15 from '../../assets/icons/icon15.jpg';
import icon16 from '../../assets/icons/icon16.jpg';
import icon17 from '../../assets/icons/icon17.jpg';
import icon18 from '../../assets/icons/icon18.jpg';
import icon19 from '../../assets/icons/icon19.jpg';
import icon20 from '../../assets/icons/icon20.jpg';
import icon22 from '../../assets/icons/icon22.jpg';
import icon23 from '../../assets/icons/icon23.jpg';
import icon24 from '../../assets/icons/icon24.jpg';
import icon25 from '../../assets/icons/icon25.jpg';
import icon26 from '../../assets/icons/icon26.jpg';
import icon27 from '../../assets/icons/icon27.jpg';
import icon28 from '../../assets/icons/icon28.jpg';
import icon29 from '../../assets/icons/icon29.jpg';
import icon30 from '../../assets/icons/icon30.jpg';

const ICONS = [
  icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10,
  icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20,
  icon22, icon23, icon24, icon25, icon26, icon27, icon28, icon29, icon30
];

const MyPage = () => {
  const { getIdentity, logout } = useAuth();
  const user = getIdentity?.() || {};
  const username = user.username || 'Usuário';

  useEffect(() => {
    document.title = `Minha Página | @${username} | Anime Navs`;
  }, [username]);

  const avatar = useMemo(() => {
    const indice = Math.floor(Math.random() * ICONS.length);
    return ICONS[indice];
  }, []);

  return (
    <div className={styles.pageLayout}>
      <Header />
      <Banner />

      <main className={styles.mainContainer} id="main-content">
        <header className={styles.profileHeader}>
          <div className={styles.userInfo}>
            <img
              src={avatar}
              alt={`Avatar de ${username}`}
              className={styles.avatar}
              loading="eager"
            />
            <h1 className={styles.username}>@{username}</h1>
          </div>

          <button
            type="button"
            className={styles.logoutButton}
            onClick={logout}
            aria-label="Encerrar sessão da conta"
          >
            Sair da Conta
          </button>
        </header>

        <section className={styles.sectionArea} aria-label="Seus animes favoritos">
          <Favorites />
        </section>

        <section className={styles.sectionArea} aria-labelledby="recomendacoes-title">
          <h2 id="recomendacoes-title" className={styles.sectionTitle}>
            Recomendações para você
          </h2>
          <Recomendacoes />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MyPage;
