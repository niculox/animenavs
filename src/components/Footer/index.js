import styles from './Footer.module.css';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {anoAtual} Anime Navs. Todos os direitos reservados.
        </p>
        <p className={styles.credits}>
          Desenvolvido por{' '}
          <span className={styles.author}>Nícolas Amaral</span> |{' '}
          <a
            href="https://github.com/niculos" // substitua pela URL do seu perfil
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
            aria-label="Perfil de Nícolas Amaral no GitHub (abre em nova aba)"
          >
            @niculos_
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
