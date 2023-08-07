import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
const Nav = () => {
  return (
    <nav className="container navSection">
      <div className="logo">
        <h2>RumJuice</h2>
      </div>
      <div className="links">
        <ul>
          <li className="li">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
