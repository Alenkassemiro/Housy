import { useEffect, useState, useRef, RefObject } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ethers } from 'ethers';
import { BsFillBuildingFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';

import styles from './styles.module.scss';

const Header = () => {
  const [provider, setProvider] = useState({});
  const [wallet, setWallet] = useState({
    address: '',
    balance: 0,
  });
  const [isDropdownlOpen, setIsDropdownOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      // @ts-ignore
      typeof window.ethereum !== 'undefined' ||
      // @ts-ignore
      typeof window.web3 !== 'undefined'
      ) {
      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    } else {
      console.log('No web3? You should consider trying MetaMask!');
    }
  }, []);
  
  const connectWallet = async () => {
    try {
      // @ts-ignore
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      // @ts-ignore
      const wallet = provider.getSigner(account);
      const transformedAddress = `${account.substring(0, 4)}...${account.slice(
        -4
      )}`;
      const balance = ethers.utils.formatEther(await wallet.getBalance());
      setWallet({
        address: transformedAddress,
        // @ts-ignore
        balance: Number(balance).toFixed(2),
      });

      console.log(wallet);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = async () => {
    try {
      // @ts-ignore
      await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setWallet({
        address: '',
        balance: 0,
      });

      console.log(wallet);
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  const useOutsideAlerter = (ref: RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      className={styles.main}
      style={
        router.pathname === '/' ? { backgroundColor: 'var(--primary)' } : {}
      }
    >
      <div>
        <Link href={'/'}>
          <img src="/logo.svg" />
        </Link>
      </div>
      <div>
        <nav className={styles.nav}>
          <ul className={styles.stroke}>
            <li
              className={router.pathname === '/quemSomos' ? styles.active : ''}
            >
              <Link href="/quemSomos">Vender</Link>
            </li>
            <li
              className={
                router.pathname === '/ourProperties' ? styles.active : ''
              }
            >
              <Link href="/ourProperties">Our Properties</Link>
            </li>
            <li
              className={router.pathname === '/comoAjudar' ? styles.active : ''}
            >
              <Link href="/comoAjudar">About Us</Link>
            </li>
            {wallet.address !== '' && (
              <li className={styles.walletInfo}>
                <span>
                  {wallet.address} - {wallet.balance} ETH
                </span>
              </li>
            )}
            {wallet.address !== '' && (
              <div className={styles.profile} ref={wrapperRef}>
                {wallet.address !== '' && (
                  <div className={styles.headerInfo}>
                    <div
                      className={styles.userIcon}
                      onClick={() =>
                        setIsDropdownOpen((prevState) => !prevState)
                      }
                    >
                      <Image
                        width={200}
                        height={200}
                        src={
                          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        }
                        alt="Profile Image"
                      />
                    </div>
                    <div
                      className={`${styles.dropdownMenu} ${
                        isDropdownlOpen ? styles.open : styles.closed
                      }`}
                      ref={menuRef}
                    >
                      <ul>
                        <li className={styles.dropdownItem}>
                          <BsFillBuildingFill size={25} />
                          <Link href="/myProperties">My properties</Link>
                        </li>
                        <li className={styles.dropdownItem}>
                          <BiLogOut size={25} />
                          <Link onClick={disconnectWallet} href="#">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
            {wallet.address === '' && (
              <li>
                <button className={styles.loginBtn} onClick={connectWallet}>Login</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
