import React from "react";
import { PiSoccerBallFill } from "react-icons/pi"; 
import styles from "./Header.module.css"; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <PiSoccerBallFill size={64} color="black" /> 
        <h1 className={styles.title}>My Football Flix</h1>
      </div>
      <nav className={styles.nav}>
        <button className={styles.navButton}>Home</button>
        <button className={styles.navButton}>Nuevo Video</button>
      </nav>
    </header>
  );
};

export default Header;
