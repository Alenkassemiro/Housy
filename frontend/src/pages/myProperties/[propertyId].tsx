import Image from 'next/image';

import styles from '@/styles/propertyPage.module.scss';
import Map from '@/components/Map';

const PropertyPage = () => {
  const features = [
    {
      name: 'Bedrooms',
      description:
        'Elegantly designed bedrooms, perfect for a growing family or guests',
      value: '2',
    },
    {
      name: 'Bathrooms',
      description:
        'Modern and luxurious bathrooms, each with unique design elements.',
      value: '3',
    },
    {
      name: 'Gym',
      description:
        'State-of-the-art home gym with top-notch equipment for your fitness needs.',
      value: '1',
    },
  ];

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <>
      <div className={styles.bannerContainer}>
        <Image src="/propertyGif.gif" width={1152} height={648} alt="banner" />
      </div>
      <main className={styles.main}>
        <section>
          <div className={styles.infoContainer}>
            <div className={styles.titleContainer}>
              <h1>123 Oak Street</h1>
              <Image
                src="/staticStars.svg"
                height={36}
                width={278}
                alt="stars"
              />
            </div>
            <p className={styles.propertyDescripition}>
              Discover a captivating architectural gem, a modern oasis tucked
              amidst lush greenery, offering a serene retreat from city life.
              This charming home boasts a contemporary design, blending
              harmoniously with nature.
            </p>
            <div className={styles.features}>
              {features.map((feature) => (
                <div className={styles.featureBox} key={feature.name}>
                  <div>
                    <Image
                      src={`/icons/${feature.name}.svg`}
                      alt="featureIcon"
                      height={55}
                      width={55}
                    />
                    <h3>
                      {feature.value}
                      {" "}
                      {feature.name}
                    </h3>
                  </div>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bidCard}>
            <div className={styles.field}>
              <span>Reserve price</span>
              <p>$210.000,00</p>
            </div>
            <div className={styles.field}>
              <span>Current value</span>
              <p>$300.000,00 </p>
            </div>
            <button>Make a bid</button>
            <span className={styles.bidStatus}>Your bid is winning</span>
          </div>
        </section>

        {/* <div className={styles.location}>
          <h2>Location of this property</h2> */}
          {/* <Map location={location} zoomLevel={17} /> */}
        {/* </div> */}
      </main>
    </>
  );
};

export default PropertyPage;
