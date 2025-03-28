import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"> <img src="/images/logoanimenavs.png" alt="logo-anime-navs"/> </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Indication">Weekly indication</Link>
                <Link to="/MyPage">My Page</Link>
            </nav>      
        </header>
    );
  }
  
export default Header;
