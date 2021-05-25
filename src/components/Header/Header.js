import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <nav className="nav-menu container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="logo">
        <Link to="/">Cart</Link>
      </div>
    </nav>
  );
};

export default Header;
