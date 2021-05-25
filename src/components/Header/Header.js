import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import CartIcon from "../CartIcon/Carticon";

const Header = () => {
  return (
    <nav className="nav-menu container">
      <ul>
        <li>
          <Link to="/">Store</Link>
        </li>
      </ul>
      <div className="center-nav">
        <div>
          <Link style={{padding:'20px'}} to="/"> Shop </Link>
        </div>
        <div>
          <div>
            <Link style={{padding:'20px'}}  to="/"> Home </Link>
          </div>
        </div>
      </div>

      <CartIcon />
    </nav>
  );
};

export default Header;
