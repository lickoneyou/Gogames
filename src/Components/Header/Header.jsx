import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import Btn from "../Btn/Btn";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className={style.navWrapper}>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Prices</li>
            <li>Rules</li>
          </ul>
        </nav>
        <Btn className={style.btn} />
      </div>
    </header>
  );
};

export default Header;
