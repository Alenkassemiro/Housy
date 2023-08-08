import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.module.scss';

function Header() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div>
      <Link href={'/'}>
        <img src="logo.svg" />
      </Link>
      </div>
      <div>
      <nav className={styles.nav}>
        <ul className={styles.stroke}>
          <li className={router.pathname === '/quemSomos' ? styles.active : ''}>
            <Link href="/quemSomos">Vender</Link>
          </li>
          <li
            className={router.pathname === '/allProjects' ? styles.active : ''}
          >
            <Link href="/allProjects">Our Properties</Link>
          </li>
          <li
            className={router.pathname === '/comoAjudar' ? styles.active : ''}
          >
            <Link href="/comoAjudar">About Us</Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Header;
