import React from "react";
import Link from "Components/Link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link path="/">benoît petit</Link>
          </li>
          <li>
            <Link path="/about">about</Link>
          </li>
          <li>
            <Link path="/contact">contact</Link>
          </li>
          <li>
            <Link path="/case-study/spotify-replica">spotify replica</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
