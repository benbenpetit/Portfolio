import React from "react";
import Link from "Components/Link";

const Header = () => {
  return (
    <header className="c-navbar">
      <div className="c-navbar__wrapper">
        <Link path="/" className="c-navbar__tagline">benoît petit</Link>
        <nav className="c-navbar__nav">
          <ul className="c-navbar__nav__list">
            <li className="c-navbar__nav__list__item">
              <Link path="/about">about</Link>
            </li>
            {/* <li className="c-navbar__nav__list__item">
              <Link path="/contact">contact</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
