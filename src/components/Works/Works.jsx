import styles from "./Works.module.scss";
import { FaGithub } from "react-icons/fa";

export default function Works() {
  return (
    <div className={styles.works} id="works">
      <div className={styles["grid-col-4"]}>
        <h3>Last Projects</h3>
        <div className={styles.card}>
          <img src="assets/imgs/projects/PortfolioReact.png" alt="" />
          <div className={styles.details}>
            <h4>card no1</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              sed sequi explicabo, dicta nesciunt adipisci est atque molestias
              facilis consequatur! Ad,
            </p>
            <a href="#contact">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img src="assets/imgs/projects/mealPlaner.png" alt="" />
          <div className={styles.details}>
            <h4>card no1</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              sed sequi explicabo, dicta nesciunt adipisci est atque molestias
              facilis consequatur! Ad,
            </p>
            <a href="#contact">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src="assets/imgs/projects/expensTracker.png" alt="" />
          <div className={styles.details}>
            <h4>card no1</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              sed sequi explicabo, dicta nesciunt adipisci est atque molestias
              facilis consequatur! Ad,
            </p>
            <a href="#contact">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img src="assets/imgs/projects/bubbleSorting.png" alt="" />
          <div className={styles.details}>
            <h4>card no1</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              sed sequi explicabo, dicta nesciunt adipisci est atque molestias
              facilis consequatur! Ad,
            </p>
            <a href="#contact">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
