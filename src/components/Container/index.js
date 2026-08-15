import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAnime } from '../../components/SectionRec';
import styles from './Container.module.css';

import bleach from '../../assets/BLEACH.jpg';
import byakuya from '../../assets/byakuia.jpg';
import ichigo from '../../assets/ichigo.jpg';
import unohana from '../../assets/unohana.jpg';
import gatin from '../../assets/gatin.jpg';
import kisuke from '../../assets/kisuke.jpg';
import rukia from '../../assets/rukia.jpg';
import madara from '../../assets/madara.jpg';
import totoro from '../../assets/totoro.jpg';
import Aki from '../../assets/Aki.jpg';
import animeimg from '../../assets/animeimg.jpg';
import background from '../../assets/background.jpg';
import bankaiunohana from '../../assets/bankaiunohana.jpg';
import casteloghibli from '../../assets/casteloghibli.jpg';
import fantasmaghibli from '../../assets/fantasmaghibli.jpg';
import gatokiki from '../../assets/gatokiki.jpg';
import gatonolago from '../../assets/gatonolago.jpg';
import jujutsu from '../../assets/jujutsu.jpg';
import kakashihatake from '../../assets/kakashihatake.jpg';
import kiki from '../../assets/kiki.jpg';
import kimetsu from '../../assets/kimetsu.jpg';
import kurosakiichigo from '../../assets/kurosakiichigo.jpg';
import makima from '../../assets/makima.jpg';
import narutoasthetic from '../../assets/narutoaesthetic.jpg';
import narutoart from '../../assets/narutoart.jpg';
import narutocostas from '../../assets/narutocostas.jpg';
import narutowallpapper from '../../assets/narutowallpaper.jpg';
import princessmononoke from '../../assets/princessmononoke.jpg';
import princessmononokepink from '../../assets/princessmononokepink.jpg';
import shinjibleach from '../../assets/shinjibleach.jpg';
import studioghibliaesthetic from '../../assets/studioghibliaesthetic.jpg';
import totorochuva from '../../assets/totorochuva.jpg';
import yhwa from '../../assets/yhwa.jpg';
import yourname from '../../assets/yourname.jpg';

const IMAGES_CONTAINER = [
  bleach, byakuya, ichigo, unohana, gatin, kisuke, rukia, madara, totoro,
  Aki, animeimg, background, bankaiunohana, casteloghibli, fantasmaghibli,
  gatokiki, gatonolago, jujutsu, kakashihatake, kiki, kimetsu, kurosakiichigo,
  makima, narutoasthetic, narutoart, narutocostas, narutowallpapper,
  princessmononoke, princessmononokepink, shinjibleach, studioghibliaesthetic,
  totorochuva, yhwa, yourname
];

function Container() {
  const currentAnime = useAnime();

  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * IMAGES_CONTAINER.length);
    return IMAGES_CONTAINER[index];
  }, []);

  if (!currentAnime) return null;

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.imageHighlightWrapper} aria-hidden="true">
        <img
          src={randomImage}
          alt=""
          className={styles.heroImage}
          loading="eager"
        />
      </div>

      <div className={styles.contentWrapper}>
        <header className={styles.introHeader}>
          <h1 id="hero-title" className={styles.mainTitle}>
            Bem vindo ao Anime Navs!
          </h1>
          <p className={styles.subtitle}>
            Seu site de recomendações e feedbacks dos animes mais assistidos do momento
          </p>
        </header>

        <section aria-label="Indicação da semana">
          <Link
            to="/Indication"
            className={styles.indicationCard}
            aria-label={`Indicação da semana: ${currentAnime.titulo}`}
          >
            <img
              src={currentAnime.imagem}
              alt=""
              aria-hidden="true"
              className={styles.indicationImage}
            />
            <div className={styles.indicationOverlay}>
              <span className={styles.indicationBadge}>Weekly Indication</span>
              <h2 className={styles.indicationTitle}>{currentAnime.titulo}</h2>
            </div>
          </Link>
        </section>
      </div>
    </section>
  );
}

export default Container;
