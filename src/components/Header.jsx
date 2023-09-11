import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>koko'sportfolio</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">overview</Link>
          </li>
          <li>
            <Link to="/Skills">skills</Link>
          </li>
          <li>
            <Link to="/Works">works</Link>
          </li>
          <li>
            <Link to="/Hobby">hobby</Link>
          </li>
          <li>
            <Link to="/NewsSection">news</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
