import "./Header.scss";

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="hero">
        <h1 className="heading-primay">
          Hi! I'm Pouyan <br />
          <span>Jouniour</span> Full Stack
          <br /> Web Developer
          <br />
        </h1>
        <h2 className="heading-secondary">Focus: FrontEnd</h2>
        <div className="btn">
          <a href="#contact" className="btn btn--full">
            Contact me
          </a>
          <a href="#about" className=" btn btn--outline">
            About me &darr;{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
