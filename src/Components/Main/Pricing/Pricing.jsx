import React from "react";
import styles from "./Pricing.module.css";
import Plan from "./Plan/Plan";

const Pricing = () => {
  const plans = [
    { plan: "Basic", price: "50.00" },
    { plan: "Standard", price: "95.00" },
    { plan: "Premium", price: "120.00" },
  ];

  return (
    <section className={styles.pricing}>
      <h4>Our Pricing</h4>
      <h1>Choose Your Plan</h1>
      <div className={styles.planWrapper}>
        {plans.map((el) => (
          <Plan name={el.plan} price={el.price} key={el.plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
