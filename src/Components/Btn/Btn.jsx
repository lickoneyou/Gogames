import React from "react";
import style from "./Btn.module.css";

const Btn = ({ text = "Get Started Now", className }) => {
  return <button className={`${style.btn} ${className}`}>{text}</button>;
};

export default Btn;
