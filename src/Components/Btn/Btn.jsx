import React from "react";
import style from "./Btn.module.css";

const Btn = ({ text = "Get Started Now", className, fn }) => {
  return <button className={`${style.btn} ${className}`} onClick={fn}>{text}</button>;
};

export default Btn;
