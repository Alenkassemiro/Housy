import { useState } from 'react';

import Search from '@/components/Search';
import MyPropertyCard from '@/components/MyPropertyCard';

import styles from '@/styles/ourProperties.module.scss';

const myProperties = () => {
  const [search, setSearch] = useState('');

  const data = [
    {
      id: '1',
      picture: '1.jpg',
      address: {
        street: '486 Kuv Street',
        city: 'Montgomery',
        state: 'AL',
        zip: '12345',
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
          <MyPropertyCard key={card.id} id={card.id} address={card.address} picture={card.picture}/>
        ))}
      </div>
    </main>
  );
};

export default myProperties;
