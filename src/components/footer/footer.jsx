import React from "react";
import { FaHeadphones } from "react-icons/fa";
import {
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="https://imgpile.com/images/9cMVo4.png"
            alt="Logo"
            className="logo"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-icons">
            <a href="#" className="youtube">
              <FaYoutube />
            </a>
            <a href="#" className="linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" className="twitter">
              <FaTwitter />
            </a>
            <a href="#" className="facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">Products</a>
          <a href="#">Classifieds</a>
          <a href="#">Contact us</a>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
        <div className="footer-section">
          <h3>Customer Area</h3>
          <a href="#">My Account</a>
          <a href="#">Orders</a>
          <a href="#">Tracking List</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Return Policy</a>
          <a href="#">My Cart</a>
        </div>
        <div className="footer-section">
          <h3>Vendor Area</h3>
          <a href="#">Partner With us</a>
          <a href="#">Training</a>
          <a href="#">Procedures</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Have any questions?</p>
          <div className="contact-info">
            <FaHeadphones />
            <span>Call us: 123-456-7890</span>
          </div>
          <button className="download-button">Download App</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
