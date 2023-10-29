import React from "react";
import styles from "./AboutXboxPC.module.css";
import Btn from "../../Btn/Btn";
import controllerBg from "../../../assets/layers/controllerBg.svg";
import wheelB from "../../../assets/layers/wheel-big.svg";
import wheelS from "../../../assets/layers/wheel-small.svg";
import dots from "../../../assets/frames/DOTS.png";
import arrows from "../../../assets/frames/arrows.png";

const AboutXboxPC = () => {
  return (
    <section className={styles.aboutXboxPC}>
      <img className={styles.dots} src={dots} alt="frame" />
      <img className={styles.arrows} src={arrows} alt="frame" />
      <div className={styles.description}>
        <h4>About XBOX, PS</h4>
        <h1>The New Xbox, Ps Series</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters as opposed.
        </p>
        <Btn className={styles.btn} />
      </div>
      <div className={styles.controllerWrapper}>
        <img className={styles.wheelB} src={wheelB} alt="wheel" />
        <img className={styles.wheelS} src={wheelS} alt="wheel" />
        <img src={controllerBg} alt="controllerBg" />
      </div>
    </section>
  );
};

export default AboutXboxPC;
