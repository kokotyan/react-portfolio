import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <h3>koko'sportfolio</h3>
      </div>

      <nav className={`main-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">overview</Link>
          </li>
          <li>
            <Link to="/Skills">skills</Link>
          </li>
          <li>
            <Link to="/Works">Works</Link>
          </li>
          <li>
            <Link to="/Hobby">Hobby</Link>
          </li>
          <li>
            <Link to="/News">news</Link>
          </li>
        </ul>
      </nav>

      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
