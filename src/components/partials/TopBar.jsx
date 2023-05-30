import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <span>Phone: 123-456-7890</span>
        <span>Email: info@example.com</span>
      </div>
      <div className="topbar_right">
        <span>Address: 123 Main St, City, Country</span>
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
