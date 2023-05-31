import React from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  return (
    <>
      <div className="nav-parent">
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://imgpile.com/images/9cMVo4.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <div className="classified-dropdown">
            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
            <div className="dropdown-content">{"dfadfdf"}</div>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search here..."
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="right-icons">
            <div className="right-icons-left">
              <FiHeart className="icon" />
              <RiShoppingBasket2Line className="icon" />
              <RxAvatar className="icon" />
            </div>
            <div className="right-icons-right">
              <button className="classified-button">Classified</button>
            </div>
          </div>
        </nav>
        <div className="nav-propss">
          <div className="nav-propss-dropdown">
            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
          <div className="nav-propss-atags">
            <a href="#">My Account</a>
            <a href="#">Orders</a>
            <a href="#">Tracking List</a>
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">My Cart</a>
            <a href="#">Products</a>
            <a href="#">Classifieds</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
