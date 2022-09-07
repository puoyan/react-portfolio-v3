import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="text">
          <h4>
            About me: <menu type="toolbar"></menu>
          </h4>
          <p>
            My name is Pouyan and I live in Vienna. I studied industrial
            engineering in Iran. recently graduated from the CodeFactory
            Institute in Vienna as a Full Stack Web developer.
          </p>
        </div>
        <img src="assets/imgs/pouyan.jpeg" alt="" />
      </div>
    </div>
  );
}
