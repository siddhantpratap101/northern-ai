import React from "react";
import northernLogo from "../assets/pictures/northern_logo.png";
import "../App.css";
import { Link } from "react-router-dom";
import logoNAI from "../assets/pictures/logoNAI.png";

function cacheBlogPage() {
  import("../pages/BlogAi");
}
function cacheLoginPage() {
  import("../pages/Login");
}

function Navbar() {
  return (
    <div className="navbar">
      <div className="nailogoh2">
        <img className="naiLogo" src={northernLogo} alt="logo" />
        <img className="naiLOGO" src={logoNAI} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li>PRODUCTS</li>
        <li>SERVICES</li>
        <li>NEWS.AI</li>
        <li onMouseEnter={cacheBlogPage}>
          <Link to="/blogAi" className="link">
            BLOG.AI
          </Link>
        </li>
        <li onMouseEnter={cacheLoginPage}>
          <Link to="/explore" className="explore link">
            EXPLORE
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
