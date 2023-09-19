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
            <Link to="/" onClick={closeMenu}>overview</Link>
          </li>
          <li>
            <Link to="/Skills" onClick={closeMenu}>skills</Link>
          </li>
          <li>
            <Link to="/Works" onClick={closeMenu}>Works</Link>
          </li>
          <li>
            <Link to="/Hobby" onClick={closeMenu}>Hobby</Link>
          </li>
          <li>
            <Link to="/News" onClick={closeMenu}>news</Link>
          </li>
        </ul>
      </nav>

      {/* ハンバーガーメニューのトグル */}
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>

      </div>
    </header>
  );
};

export default Header;
