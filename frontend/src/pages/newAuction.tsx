import { FC } from "react";
import PropertyCard from "@/components/PropertyCard";

import styles from "../styles/newAuction.module.scss";

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

const newAuction: FC<Props> = ({ address, picture, id }: Props) => {
  return (
    <div className={styles.main}>
      <h1>New Auction</h1>
      <div className={styles.image}>
        <div>
      <div className={styles.input}>
        <label>Reserve Price</label>
        <input type="text" defaultValue={"$"} className={styles.price} />
      </div>
      <div className={styles.input}>
        <label>Property Address</label>
        <input type="text" className={styles.address}/>
      </div>
      <div className={styles.input}>
        <label>Property Description</label>
        <input type="text" className={styles.address}/>
      </div>
      <div>

      </div>
        </div>

      </div>
      <label className={styles.auctionDate}>Auction Date</label>
      <div className={styles.input}>
        <label>Starts at</label>
        <input type="text" className={styles.date}/>
        <label>Ends at</label>
        <input type="text" className={styles.date}/>
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
        <input type="text" className={styles.legalInfo}/>
      </div>
    </div>
  );
};

export default newAuction;