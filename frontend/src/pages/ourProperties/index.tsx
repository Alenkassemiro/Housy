import { useState } from 'react';

import Search from '@/components/Search';

import styles from '@/styles/ourProperties.module.scss';
import PropertyCard from '@/components/PropertyCard';

const ourProperties = () => {
  const [search, setSearch] = useState('');

  const data = [
    {
      id: '1',
      picture: '1.jpg',
      address: {
        street: '123 Oak Street',
        city: 'Springfield',
        state: 'CA',
        zip: '12345',
      },
    },
    {
      id: '2',
      picture: '2.jpg',
      address: {
        street: '456 Maple Avenue',
        city: 'Willowdale',
        state: 'NY',
        zip: '67890',
      },
    },
    {
      id: '3',
      picture: '3.jpg',
      address: {
        street: '789 Pine Lane',
        city: 'Sunnyside  ',
        state: 'TX',
        zip: '54321',
      },
    },
    {
      id: '4',
      picture: '4.jpg',
      address: {
        street: '101 Elm Court',
        city: 'Riverside',
        state: 'FL',
        zip: '98765',
      },
    },
    {
      id: '5',
      picture: '5.jpg',
      address: {
        street: '222 Birch Road',
        city: 'Hillcrest',
        state: 'WA',
        zip: '13579',
      },
    },
    {
      id: '6',
      picture: '6.jpg',
      address: {
        street: '789 Pine Lane',
        city: 'Sunnyside',
        state: 'TX',
        zip: '54321',
      },
    },
  ];

  const filteredData =
    search.length > 0
      ? data.filter((card) =>
          card.address.street.toLowerCase().includes(search.toLowerCase())
        )
      : data;

  return (
    <main className={styles.main}>
      <h1>Our Properties</h1>
      <Search
        search={search}
        onSearch={setSearch}
        placeholder="Search by street name..."
      />
      <div className={styles.cards}>
        {filteredData.map((card) => (
          <PropertyCard key={card.id} id={card.id} address={card.address} picture={card.picture}/>
        ))}
      </div>
    </main>
  );
};

export default ourProperties;
