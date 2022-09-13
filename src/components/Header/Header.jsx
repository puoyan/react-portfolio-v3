import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles["header"]} id="header">
      <div className={styles["hero"]}>
        <h1 className={styles["heading-primay"]}>
          Hi! I'm Pouyan <br />
          <span>Jouniour</span> Full Stack
          <br /> Web Developer
          <br />
        </h1>
        <h2 className={styles["heading-secondary"]}>Focus: FrontEnd</h2>
        <div className={styles["btn"]}>
          <a
            href="#contact"
            className={`${styles["btn"]} ${styles["btn--full"]}`}
          >
            Contact me
          </a>
          <a
            href="#about"
            className={`${styles["btn"]} ${styles["btn--outline"]}`}
          >
            About me &darr;{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
