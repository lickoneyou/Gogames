import React from "react";
import styles from "./Plan.module.css";
import Btn from '../../../Btn/Btn'

const Plan = ({ name, price }) => {
  const liArr = [
    "10 users included",
    "2 GB of storage",
    "Email support",
    "Help center access",
    "10 users included",
  ];

  return (
    <div className={styles.plan}>
      <h2>{name}</h2>
      <p>
        <span className={styles.dollarSym}>$</span>
        {price}
        <span className={styles.perH}>/ Per Hour</span>
      </p>
      <ul>
        {liArr.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <Btn text="Select This Plan" className={styles.btn}/>
    </div>
  );
};

export default Plan;
