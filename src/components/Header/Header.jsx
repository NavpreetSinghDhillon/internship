import React from "react";
import styles from "./Header.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <img
            src="https://internshala.com/static/images/internshala_company_logo.svg"
            alt="Internshala Logo"
            className={styles.logo}
          />

          <div className={styles.navLinks}>
            <a href="#" className={`${styles.navItem} ${styles.active}`}>
              Internships
            </a>
            <a href="#" className={styles.navItem}>
              Jobs
            </a>
            <a href="#" className={styles.navItem}>
              Courses
            </a>
            <a href="#" className={styles.navItem}>
              Resources
            </a>
          </div>

          <div className={styles.authButtons}>
            <a href="#" className={styles.login}>
              Login
            </a>
            <a href="#" className={styles.register}>
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
