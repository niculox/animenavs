import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink} onClick={closeMenu}>
          <img
            src="/images/logoanimenavs.png"
            alt="Anime Navs"
            className={styles.logo}
          />
        </Link>

        {/* Botão de menu visível apenas no mobile */}
        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          onClick={toggleMenu}
        >
          <span className={styles.hamburger} aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          aria-label="Navegação Principal"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
        >
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Indication"
                className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                onClick={closeMenu}
              >
                Weekly indication
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MyPage"
                className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                onClick={closeMenu}
              >
                My Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
