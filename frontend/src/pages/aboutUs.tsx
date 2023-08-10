import React from "react";
import styles from "../styles/aboutUs.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function AboutUs() {
    useEffect(() => {
        AOS.init({
          duration: 2000
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
        <div>
          <h2>Our team</h2>
          
        </div>
        <img src="card.png" alt="" className={styles.imageCard} />
      </div>
    </div>
  );
}

export default AboutUs;
