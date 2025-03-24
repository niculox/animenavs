import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img src="/images/logoanimenavs.png" alt="logo-anime-navs"/> 
            <nav>
                <a href="#">Home</a>
                <a href="#">My Page</a>
            </nav>      
        </header>
    );
  }
  
  export default Header;