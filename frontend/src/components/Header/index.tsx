import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.module.scss';

function Header() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Link href={'/'}>
        <img src="logo.svg" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.stroke}>
          <li className={router.pathname === '/quemSomos' ? styles.active : ''}>
            <Link href="/quemSomos">Quem somos</Link>
          </li>
          <li
            className={router.pathname === '/allProjects' ? styles.active : ''}
          >
            <Link href="/allProjects">Nossas iniciativas</Link>
          </li>
          <li
            className={router.pathname === '/comoAjudar' ? styles.active : ''}
          >
            <Link href="/comoAjudar">Como ajudar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
