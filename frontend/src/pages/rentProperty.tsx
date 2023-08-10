import { useState, FormEvent, useEffect } from "react";

import styles from "../styles/newAuction.module.scss";
import { createInput } from "@/services/createInput";
import { getAllAuctions } from "@/services/getData";
import { toUnixTime } from "@/services/treatment";

const newAuction = () => {
  const [reservePrice, setReservePrice] = useState(0);
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [auctionStartDate, setAuctionStartDate] = useState("");
  const [auctionEndDate, setAuctionEndDate] = useState("");
  const [condition, setCondition] = useState("");
  const [legalInformation, setLegalInformation] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      reservePrice,
      propertyAddress,
      propertyDescription,
      auctionStartDate,
      auctionEndDate,
      condition,
      legalInformation,
    };

    console.log(data);

    const payload = {
      method: "create",
      args: {
        title: data.propertyAddress,
        description: data.propertyDescription,
        min_bid_amount: data.reservePrice,
        start_date: toUnixTime(data.auctionStartDate),
        rental_duration: 5
      }
    }

    try {
      await createInput(payload);
      console.log("Input created successfully!");
    }
    catch (err) {
      console.log(err);
    }
    
  };
  useEffect(() => {
    getAllAuctions();
  });

  return (
    <div className={styles.main}>
      <h1>Create your auction</h1>
      <div className={styles.content}>
        <form
          className={styles.form}
          style={{ justifySelf: "flex-start" }}
          onSubmit={submitHandler}
        >
          <div className={styles.input}>
            <label>Reserve Price</label>
            <input
              type="number"
              className={styles.price}
              onChange={(e) => setReservePrice(Number(e.target.value))}
            />
          </div>
          <div className={styles.input}>
            <label>Property Address</label>
            <input
              type="text"
              className={styles.address}
              onChange={(e) => setPropertyAddress(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label>Property Description</label>
            <textarea
              rows={5}
              className={styles.address}
              onChange={(e) => setPropertyDescription(e.target.value)}
            />
          </div>
          <div className={styles.dateContainer}>
            <h3 className={styles.auctionDate}>Auction Date</h3>
            <div className={styles.dateRow}>
              <div className={styles.input}>
                <label>Starts at</label>
                <input
                  type="date"
                  className={styles.date}
                  onChange={(e) => setAuctionStartDate(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <label>Ends at</label>
                <input
                  type="date"
                  className={styles.date}
                  onChange={(e) => setAuctionEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <label className={styles.conditionContainerLabel}>Condition</label>
            <div className={styles.checkboxState}>
              <div className={styles.checkBoxField}>
                <label htmlFor="new">New</label>
                <input id="new" type="checkbox" />
              </div>
              <div className={styles.checkBoxField}>
                <label htmlFor="renovated">Renovated</label>
                <input type="checkbox" id="renovated" />
              </div>
              <div className={styles.checkBoxField}>
                <label htmlFor="requiresRepairs">Requires repairs</label>
                <input type="checkbox" id="requiresRepairs" />
              </div>
            </div>
          </div>

          <div className={styles.input}>
            <label>Legal Information</label>
            <input
              type="text"
              className={styles.legalInfo}
              onChange={(e) => setLegalInformation(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>Cadastrar</button>
        </form>
        <div className={styles.cardContainer}>
          <div>
            <img src="upload.png" alt="" className={styles.inputImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default newAuction;
