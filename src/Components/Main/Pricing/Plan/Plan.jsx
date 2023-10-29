import React from "react";
import styles from "./Plan.module.css";
import Btn from "../../../Btn/Btn";

const Plan = ({ name, price }) => {
  const liArr = [
    "10 users included",
    "2 GB of storage",
    "Email support",
    "Help center access",
    "10 users included",
  ];

  function selectPlan(e) {
    const plans = document.querySelectorAll(
      `.${e.target.closest("div").className}`
    );
    const currentPlan = e.target.closest("div");
    plans.forEach((el) => {
      if (el != currentPlan) el.id = "";
    });
    if (currentPlan.id == "active") {
      currentPlan.id = "";
    } else {
      currentPlan.id = "active";
    }
  }

  return (
    <div className={styles.plan}>
      <h2>{name}</h2>
      <p>
        <span className={styles.dollarSym}>$</span>
        {price}
        <span className={styles.perH}>/ Per Hour</span>
      </p>
      <ul>
        {liArr.map((el, ind) => (
          <li key={ind}>{el}</li>
        ))}
      </ul>
      <Btn text="Select This Plan" className={styles.btn} fn={selectPlan} />
    </div>
  );
};

export default Plan;
