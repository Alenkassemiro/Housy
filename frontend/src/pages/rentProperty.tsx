import { useState, FormEvent, ChangeEvent } from "react";

import styles from "../styles/newAuction.module.scss";
import { toast } from "react-hot-toast";
import { sendToIPFS } from "@/helpers/utils";
import { sendInput } from "@/helpers/sendData";

const newAuction = () => {
  const [reservePrice, setReservePrice] = useState(0);
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [auctionStartDate, setAuctionStartDate] = useState<Date>();
  const [auctionEndDate, setAuctionEndDate] = useState<Date>();
  const [condition, setCondition] = useState("");
  const [legalInformation, setLegalInformation] = useState("");
  const [fileState, setFileState] = useState<File>();

  const handleChallengeAnswerChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file) {
        setFileState(file);
      } else {
        toast.error("Por favor, selecione um arquivo válido.");
      }
    }
  };
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!fileState) return toast.error("Por favor, selecione um arquivo.");

    const IPFSResponse = await sendToIPFS(fileState);

    console.log(IPFSResponse);

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

    const sendInputResponse = await sendInput(data);

    console.log(sendInputResponse);
  };

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
                  onChange={(e) => {
                    const date = new Date(e.target.value);  
                    setAuctionStartDate(date)
                  }}
                />
              </div>
              <div className={styles.input}>
                <label>Ends at</label>
                <input
                  type="date"
                  className={styles.date}
                  onChange={(e) => {
                    const date = new Date(e.target.value);  
                    setAuctionEndDate(date)
                  }}
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

          <button type="submit" className={styles.submitBtn}>
            Create
          </button>
        </form>
        <div className={styles.cardContainer}>
          <div className={styles.upload}>
            <input
              id="file-upload"
              type="file"
              onChange={handleChallengeAnswerChange}
            />
            {fileState ? (
              <label htmlFor="file-upload" className={styles.uploaded}>
                {fileState.name}
              </label>
            ) : (
              <label htmlFor="file-upload">Upload File</label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default newAuction;
