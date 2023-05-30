import React from "react";
import "./navbar.css";
import { FaSearch, FaHeart, FaShoppingBasket, FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="classified-dropdown">
        <button className="dropdown-button">Classified</button>
        <div className="dropdown-content">{/* Dropdown Content */}</div>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
      <div className="right-icons">
        <FaHeart className="icon" />
        <FaShoppingBasket className="icon" />
        <FaUser className="icon" />
        <button className="classified-button">Classified</button>
      </div>
    </nav>
  );
};

export default NavBar;
