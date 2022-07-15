import React from "react";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Header.css";

const Header = ({ myTheme, onToggleTheme, onSwhitch }) => {
  return (
    <header data-theme={myTheme}>
      <div className="container --flex-between">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className="--flex-between">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div onClick={onToggleTheme}>
          <span className="toggle-btn">
            <FaMoon color="pink" size={16} />
            <FaSun color="yellow" size={16} />
            <div className={onSwhitch ? "ball move" : "ball"}></div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
