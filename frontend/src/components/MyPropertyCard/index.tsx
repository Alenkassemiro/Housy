import { FC, useState, RefObject, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { SlOptionsVertical } from 'react-icons/sl';

import styles from './styles.module.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface Props {
  id: string;
  picture: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

const MyPropertyCard: FC<Props> = ({ address, picture, id }: Props) => {
  const [isDropdownlOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <div className={styles.card}>
      <Link href={`/myProperties/${id}`}>
        <Image
          src={`/properties/${picture}`}
          width={300}
          height={300}
          alt="Property picture"
        />
      </Link>
      <div className={styles.cardFooter}>
        <Link href={`/ourProperties/${id}`}>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
        </Link>
        <SlOptionsVertical
          // onClick={() => {
          //   toast.loading('Feature under development', {
          //     duration: 3000,
          //     position: 'top-right',
          //     style: {
          //       fontSize: '1.6rem',
          //     },
          //   });
          // }}
          size={25}
          onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        />
        <div
          className={`${styles.dropdownMenu} ${
            isDropdownlOpen ? styles.open : styles.closed
          }`}
          ref={menuRef}
        >
          <ul>
            <li className={styles.dropdownItem}>
              Start a new auction <AiOutlinePlusCircle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyCard;
