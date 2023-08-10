import { useRouter } from 'next/router';
import { useEffect } from 'react';

import PropertyCard from '@/components/PropertyCard';

import styles from '../../styles/newAuction.module.scss';

const newAuction = () => {
  const router = useRouter();

  const data = {
    id: '1',
    picture: '1.jpg',
    address: {
      street: '486 Kuv Street',
      city: 'Montgomery',
      state: 'AL',
      zip: '12345',
    },
  };

  useEffect(() => {
    const propertyId = router.query.propertyId;

    console.log(propertyId);
  }, [router]);

  return (
    <div className={styles.main}>
      <h1>New Auction</h1>
      <div className={styles.content}>
        <form className={styles.form} style={{ justifySelf: 'flex-start' }}>
          <div className={styles.input}>
            <label>Reserve Price</label>
            <input type="text" defaultValue={'$'} className={styles.price} />
          </div>
          <div className={styles.input}>
            <label>Property Address</label>
            <input type="text" className={styles.address} />
          </div>
          <div className={styles.input}>
            <label>Property Description</label>
            <textarea rows={5} className={styles.address} />
          </div>
          <div className={styles.dateContainer}>
            <h3 className={styles.auctionDate}>Auction Date</h3>
            <div className={styles.dateRow}>
              <div className={styles.input}>
                <label>Starts at</label>
                <input type="text" className={styles.date} />
              </div>
              <div className={styles.input}>
                <label>Ends at</label>
                <input type="text" className={styles.date} />
              </div>
            </div>
          </div>

          <label>Condition</label>
          <div className={styles.checkboxState}>
            <p>New</p>
            <input type="checkbox" />
            <p>Renovated</p>
            <input type="checkbox" />
            <p>Requires repairs</p>
            <input type="checkbox" />
          </div>
          <div className={styles.input}>
            <label>Legal Information</label>
            <input type="text" className={styles.legalInfo} />
          </div>
        </form>
        <div className={styles.cardContainer}>
          <PropertyCard
            key={data.id}
            id={data.id}
            address={data.address}
            picture={data.picture}
          />
        </div>
      </div>
    </div>
  );
};

export default newAuction;
