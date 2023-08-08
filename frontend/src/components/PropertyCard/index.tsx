import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart } from 'react-icons/ai';

import styles from './styles.module.scss';

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

const PropertyCard: FC<Props> = ({ address, picture, id }: Props) => {
  return (
    <div className={styles.card}>
      <Link href={`/ourProperties/${id}`}>
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
        <AiOutlineHeart
          onClick={() => {
            toast.loading('Feature under development',{
                duration: 3000,
                position: 'top-right',
                style: {
                    fontSize: '1.6rem',
                }
            });
          }}
          size={25}
        />
      </div>
    </div>
  );
};

export default PropertyCard;
