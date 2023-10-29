import React from "react";
import styles from "./Pricing.module.css";
import Plan from "./Plan/Plan";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h4>Our Pricing</h4>
      <h1>Choose Your Plan</h1>
      <div className={styles.planWrapper}>
      <Plan name='Basic' price='50.00'/>
      </div>
    </section>
  );
};

export default Pricing;
