import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <h3>koko'sportfolio</h3>
      </div>

      {/* スマートフォン用のメニュー */}
      <nav className={`main-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/react-portfolio/Home" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/react-portfolio/Skills" onClick={closeMenu}>skills</Link>
          </li>
          <li>
            <Link to="/react-portfolio/Works" onClick={closeMenu}>Works</Link>
          </li>
          <li>
            <Link to="/react-portfolio/Hobby" onClick={closeMenu}>Hobby</Link>
          </li>
          <li>
            <Link to="/react-portfolio/News" onClick={closeMenu}>news</Link>
          </li>
        </ul>
      </nav>

      {/*トグル */}
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>

      </div>
    </header>
  );
};

export default Header;
