import styles from './Estrelas.module.css';
import estrelaIcon from './estrela.png';

function Estrelas({ estrelas = 0 }) {
  const totalEstrelas = 5;
  const notaValida = Math.max(0, Math.min(Number(estrelas) || 0, totalEstrelas));

  return (
    <div
      className={styles.ratingContainer}
      role="img"
      aria-label={`Avaliação: ${notaValida} de ${totalEstrelas} estrelas`}
    >
      {[...Array(totalEstrelas)].map((_, index) => {
        const isPreenchida = index < notaValida;

        return (
          <img
            key={index}
            src={estrelaIcon}
            alt=""
            aria-hidden="true"
            className={`${styles.star} ${isPreenchida ? styles.filled : styles.empty}`}
          />
        );
      })}
    </div>
  );
}

export default Estrelas;
