import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/Skills";
import Works from "./components/Works/Works";
import "./App.scss";
import { useState } from "react";
import Menu from "./Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Header />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
