import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#header" className="logo">
            Logo
          </a>
        </div>

        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
