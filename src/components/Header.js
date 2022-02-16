import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">benoît petit</Link>
          </li>
          <li>
          <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/contact/1">contact/1</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
