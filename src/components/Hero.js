import React from "react";
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.herocontent}>
        <h3 className={styles.pre}>New Games & Accessories</h3>
        <h1 className={styles.heroheader}>
          Monthly Packages.
          <br />
          Excitement delivered daily.
        </h1>
        <p>
          What's the best way to shop for the latest video games
          <br />
          and peripherals? How about never shopping at all?
          <br />
          You'll get new stuff on your doorstep - every month.
        </p>
        <button className={styles.getstarted}>GET STARTED</button>
      </div>
    </section>
  );
}

export default Hero;
