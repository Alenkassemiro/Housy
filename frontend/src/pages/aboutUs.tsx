import React from "react";
import styles from "../styles/aboutUs.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.main}>
      <h1>About Us</h1>
      <div className={styles.card} data-aos="fade-in">
        <div>
          <h2>Our motivation</h2>
          <p>
            Traditionally, investing in real estate involves complex
            bureaucratic processes, high entry costs, and management expenses.
            Tokenization can diminish these barriers, making the investment
            process more efficient and less burdensome. Moreover, our primary
            focus is on reducing the fees charged within this ecosystem.
          </p>
        </div>
        <img src="card.svg" alt="" className={styles.imageCard} />
      </div>
        <div className={styles.teamRow} data-aos="fade-in" >
          <h2>Our team</h2>
            <div className={styles.nextContainer}>
              <div className={styles.photo}>
                <a href="https://www.linkedin.com/in/abner-silva-barbosa-8a3542225/">
                  <img
                    src="https://github.com/AbnerSilvaBarbosa.png"
                    width="150px;"
                    alt="image"
                  />
                  <br />
                  <sub>
                    <b>Abner Barbosa</b>
                  </sub>
                </a>
              </div>
              <div className={styles.photo}>
                <a href="https://www.linkedin.com/in/alexandrefonseca00/">
                  <img
                    src="https://github.com/Xandebrabe.png"
                    width="150px;"
                    alt="image"
                  />
                  <br />
                  <sub>
                    <b>Alexandre Fonseca</b>
                  </sub>
                </a>
              </div>
              <div className={styles.photo}>
                <a href="https://www.linkedin.com/in/bianca-cassemiro/">
                  <img
                    src="https://github.com/Bianca-Cassemiro.png"
                    width="150px;"
                    alt="image"
                  />
                  <br />
                  <sub>
                    <b>Bianca Cassemiro</b>
                  </sub>
                </a>
              </div>
              <div className={styles.photo}>
                <a href="https://www.linkedin.com/in/luiz-k-alencar/">
                  <img
                    src="https://github.com/luiz-k-alencar.png"
                    width="150px;"
                    alt="image"
                  />
                  <br />
                  <sub>
                    <b>Luiz Felipe Kama</b>
                  </sub>
                </a>
              </div>
              <div className={styles.photo}>
                <a href="https://www.linkedin.com/in/victor-severiano-de-carvalho-b57a05237">
                  <img
                    src="https://github.com/vict0rcarvalh0.png"
                    width="150px;"
                    alt="Victor Carvalho profile image"
                  />
                  <br />
                  <sub>
                    <b>Victor Carvalho</b>
                  </sub>
                </a>
              </div>
            </div>
        </div>
      </div>
  );
}

export default AboutUs;
