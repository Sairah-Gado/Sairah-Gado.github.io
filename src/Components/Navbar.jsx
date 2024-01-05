import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="portfolio">
        <h1>Portfolio</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/home" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;