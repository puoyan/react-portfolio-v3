import styles from "./Works.module.scss";

export default function Works() {
  return (
    <div className={styles.works} id="works">
      <div className={styles.card}>
        <div className={styles["img-box"]}></div>
      </div>
    </div>
  );
}
