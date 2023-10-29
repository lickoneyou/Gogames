import React from "react";
import man from "../../../assets/layers/game-men.svg";
import screen from "../../../assets/layers/screen.png";
import vrBg from "../../../assets/layers/vrBg.png";
import arrows from "../../../assets/frames/arrows.png";
import kerfin from "../../../assets/layers/Kerfin.png";
import styles from "./About.module.css";
import Btn from "../../Btn/Btn";

const About = () => {
  return (
    <section className={styles.about}>
      <img className={styles.vrBg} src={vrBg} alt="layer" />
      <img className={styles.arrows} src={arrows} alt="frame" />
      <img className={styles.kerfin} src={kerfin} alt="layer" />
      <div className={styles.aboutManWrapper}>
        <img className={styles.man} src={man} alt="man" />
        <img className={styles.screen} src={screen} alt="screen" />
      </div>
      <div className={styles.description}>
        <h4>About VR Glasses</h4>
        <h1>The New VR Glasses Series</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters as opposed.
        </p>
        <Btn className={styles.btn} />
      </div>
    </section>
  );
};

export default About;
