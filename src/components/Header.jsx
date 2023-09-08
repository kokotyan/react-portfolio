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
            <Link to="/">works</Link>
          </li>
          <li>
            <Link to="/">hobby</Link>
          </li>
          <li>
            <Link to="/">news</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
