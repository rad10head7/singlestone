import React from "react";
import logo from "../assets/logo-endless.svg";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
