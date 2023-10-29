import React from "react";
import style from "./Btn.module.css";

const Btn = ({ text = "Get Started Now" }) => {
  return <button className={style.btn}>{text}</button>;
};

export default Btn;
