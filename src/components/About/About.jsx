import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <h4>
            About me: <menu type={styles.toolbar}></menu>
          </h4>
          <p>
            My name is Pouyan and I live in Vienna. I studied industrial
            engineering in Iran. recently graduated from the CodeFactory
            Institute in Vienna as a Full Stack Web developer.
          </p>
          <a href="#skills">skills</a>
        </div>
        <img src="assets/imgs/pouyan.jpeg" alt="" />
      </div>
    </div>
  );
}
