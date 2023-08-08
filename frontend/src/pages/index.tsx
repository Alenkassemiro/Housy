import styles from '@/styles/index.module.scss';
import Header from '@/components/Header';
import Values from '@/components/Header/Values';
export default function Home() {
  const security = 'Security';
  const securityDescription =
    'Ensuring secure tokenization with blockchain technology, thorough ownership verification, and transparent information for user confidence.';

  const user = 'User-Friendly';
  const userDescription =
    'Providing an intuitive interface, responsive customer support, and cross-device compatibility for ease of use.';

  const transparency = 'Transparency';
  const transparencyDescription =
    'Complying with regulations, potentially implementing decentralized governance, and conducting regular audits and reporting for a trustworthy platform.';
  return (
    <>
      <div className={styles.main}>
        <h1>
          A new way <br />
          of renting real estate
        </h1>
        <img src="background_buildings.png" className={styles.banner} />
        <div className={styles.values}>
          <Values title={security} description={securityDescription} />
          <Values title={user} description={userDescription} />
          <Values title={transparency} description={transparencyDescription} />
        </div>
        <div className={styles.imageHouse}>
          <h2>
            Bid your <br />
            dream place
          </h2>
          <img src="house.svg" className={styles.house} />
        </div>
      </div>
    </>
  );
}
