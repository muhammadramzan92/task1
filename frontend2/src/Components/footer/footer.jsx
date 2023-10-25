import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";

const Footer = ({ isLoggedIn }) => {
  // Pass isLoggedIn as a prop

  return (
    <footer className="footer">
      <div className="round-box"></div>
      <div className="round-box13 round-box-none"></div>
      <div className="round-box14 round-box-none"></div>
      <div className="round-box12 round-box-none"></div>

      <div className="copyright">Copyright © 2023 <span className="textgr">MagicMyHouse.com </span></div>
      <div className="login-link">
      <Link to="/privacy">Privacy and cookie policy</Link> 
      <Link to="/term">Terms of use</Link> 
        {isLoggedIn ? (
          <Link to="/designing">Redesign</Link> // Render a Link to the dashboard when logged in
        ) : (
          <Link to="/login">Login</Link> // Render a Link to the login page when not logged in
        )}
      </div>
    </footer>
  );
};

export default Footer;
