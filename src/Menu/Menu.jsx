import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#header">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://github.com/puoyan" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </div>
  );
}
