import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <img src="../public/logo.png" alt="" className={styles.logo} />
      </div>
      <div className="nav">
        <ul className={styles.list}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
