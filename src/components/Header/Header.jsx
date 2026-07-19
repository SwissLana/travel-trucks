import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import clsx from 'clsx';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} aria-label="TravelTrucks home">
          <img src={logo} alt="" className={styles.logoImage} />
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className={styles.navigation}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  clsx(styles.link, isActive && styles.active)
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  clsx(styles.link, isActive && styles.active)
                }
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
