import styles from "./Skills.module.scss";
import { FaCode, FaReact, FaDatabase } from "react-icons/fa";

export default function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles["grid-col-3"]}>
          <h4>Skills </h4>
          <div className={styles["skill-box"]}>
            <div className={styles.icon}>
              <FaCode />
            </div>
            <div className={styles.title}>BackEnd</div>
            <div className={styles.text}>
              PHP / AJAX <br /> API /Symfony <br /> PHP Unit testing / Jasmine
              <br />
              <br />
            </div>
          </div>
          <div className={styles["skill-box"]}>
            <div className={styles.icon}>
              <FaReact />
            </div>
            <div className={styles.title}>FrontEnd</div>
            <div className={styles.text}>
              HTML5 / CSS <br /> Sass / Bootstrap 5 <br /> JavaScript/ TypScript
              <br /> React / Angular
            </div>
          </div>
          <div className={styles["skill-box"]}>
            <div className={styles.icon}>
              <FaDatabase />
            </div>
            <div className={styles.title}>
              Database &
              <br />
              version Control System
            </div>
            <div className={styles.text}>
              MySql / Git Version Control
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className={styles["grid-col-6"]}>
          <img src="assets/imgs/logos/html.png" alt="" />
          <img src="assets/imgs/logos/css.png" alt="" />
          <img src="assets/imgs/logos/bootstrap.svg" alt="" />
          <img src="assets/imgs/logos/sass.svg" alt="" />
          <img src="assets/imgs/logos/js.png" alt="" />
          <img src="assets/imgs/logos/typescript.svg" alt="" />
          <img src="assets/imgs/logos/angular.svg" alt="" />
          <img src="assets/imgs/logos/react.svg" alt="" />
          <img src="assets/imgs/logos/mysql.svg" alt="" />
          <img src="assets/imgs/logos/php.svg" alt="" />
          <img src="assets/imgs/logos/json.svg" alt="" />
          <img src="assets/imgs/logos/symfony.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
