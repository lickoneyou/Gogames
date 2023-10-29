import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import Btn from "../Btn/Btn";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Prices</li>
          <li>Rules</li>
        </ul>
      </nav>
      <Btn />
    </header>
  );
};

export default Header;
