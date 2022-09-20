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
            <h4>React Portfolio</h4>
            <p>
              had fun using the tools i learned to create this portfolio( React/
              Sass / responsive design)
            </p>
            <a
              href="https://github.com/puoyan/react-portfolio-v3"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img src="assets/imgs/projects/mealPlaner.png" alt="" />
          <div className={styles.details}>
            <h4>PHP/Symfony - Meal Planer(class Project/Team Work)</h4>
            <p>
              Team of 5 we used: Trello Bord in scrum style and Mindmap to
              organize our work, daily Zoom Meetings kept us up to date.
            </p>
            <a
              href="https://github.com/markotomic93/Team-3-MealPlanner-Project"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src="assets/imgs/projects/expensTracker.png" alt="" />
          <div className={styles.details}>
            <h4>React-Expense Tracker</h4>
            <p>
              React/Expense Tracker user can add Expense and filter the Expenses
              with Visual Chart
            </p>
            <a
              href="https://github.com/puoyan/expense_tracker"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <img src="assets/imgs/projects/bubbleSorting.png" alt="" />
          <div className={styles.details}>
            <h4>React/bubble sort visualization</h4>
            <p>
              generate the new Array with random numbers,and visualizie them on
              DOM
            </p>
            <a
              href="https://github.com/puoyan/Bubble_Sorting_React"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
