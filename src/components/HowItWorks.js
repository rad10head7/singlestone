import React from "react";
import styles from "../styles/HowItWorks.module.css";

function HowItWorks({ steps }) {
  return (
    <section className={styles.api}>
      <h1 className={styles.header}>How It Works</h1>
      <div className={styles.list}>
        {steps.map((item, index) => (
          <div className={styles.item} key={index}>
            <h1 className={styles.number}>0{item.stepNumber}</h1>
            <div className={styles.divider}>
              <span className={styles.separator}></span>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
