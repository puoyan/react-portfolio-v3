import styles from "./About.module.scss";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <h4>
            About me: <menu type={styles.toolbar}></menu>
          </h4>
          <p>
            My name is Pouyan and I live in Vienna. last Year i graduated from
            the CodeFactory Institute in Vienna as a Full Stack Web developer.
          </p>
          <a href="#skills">skills</a>
        </div>
        <img src="assets/imgs/pouyan.jpeg" alt="" />
        <div className={styles.icons}>
          <a
            href="www.linkedin.com/in/pouyan-kheradmand"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/puoyan" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/pouyan.kheradmand.3/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/pouyankheradmand/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
