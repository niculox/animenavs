import { useMemo } from 'react';
import styles from './Banner.module.css';

import foto1 from '../../assets/imagesMyPage/1.jpg';
import foto2 from '../../assets/imagesMyPage/2.jpg';
import foto3 from '../../assets/imagesMyPage/3.jpg';
import foto4 from '../../assets/imagesMyPage/4.jpg';
import foto5 from '../../assets/imagesMyPage/5.jpg';
import foto6 from '../../assets/imagesMyPage/6.jpg';
import foto7 from '../../assets/imagesMyPage/7.jpg';
import foto8 from '../../assets/imagesMyPage/8.jpg';
import foto9 from '../../assets/imagesMyPage/9.jpg';
import foto10 from '../../assets/imagesMyPage/10.jpg';
import foto12 from '../../assets/imagesMyPage/12.jpg';
import foto13 from '../../assets/imagesMyPage/13.jpg';
import foto14 from '../../assets/imagesMyPage/14.jpg';

const IMAGES = [
  foto1, foto2, foto3, foto4, foto5, foto6, foto7,
  foto8, foto9, foto10, foto12, foto13, foto14
];

function Banner() {
  // Mantém a mesma imagem durante re-renders do componente na mesma sessão
  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * IMAGES.length);
    return IMAGES[index];
  }, []);

  return (
    <div className={styles.bannerContainer} aria-hidden="true">
      <img
        className={styles.bannerImage}
        src={randomImage}
        alt=""
        loading="eager"
        decoding="async"
      />
      <div className={styles.overlay} />
    </div>
  );
}

export default Banner;
