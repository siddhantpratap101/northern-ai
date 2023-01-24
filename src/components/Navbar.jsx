import React from "react";
import northernLogo from "../assets/pictures/northern_logo.png";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img className="naiLogo" src={northernLogo} alt="logo" />
      <ul>
        <li>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li>PRODUCTS</li>
        <li>SERVICES</li>
        <li>NEWS.AI</li>
        <li>
          <Link to="/blogAi" className="link">
            BLOG.AI
          </Link>
        </li>
        <li>
          <Link to="/explore" className="explore link">
            EXPLORE
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
