import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./SignupNewsletter.css";

const SignupNewsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-image">
        <AiOutlineMail size={80} color="white" />
      </div>
      <div className="newsletter-content">
        <h2>Signup for our newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          commodo nisi ac interdum.
        </p>
      </div>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email here" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default SignupNewsletter;
