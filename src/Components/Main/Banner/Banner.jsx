import React from "react";
import styles from "./Banner.module.css";
import layerBg from "../../../assets/layers/s1l.png";
import arrows from "../../../assets/frames/arrows.png";
import hole from "../../../assets/layers/hole.svg";
import boy from "../../../assets/layers/boy.png";
import cross from "../../../assets/frames/cross.png";
import banner1 from "../../../assets/banners/box1.png";
import banner2 from "../../../assets/banners/box2.png";
import dots from "../../../assets/frames/DOTS.png";
import Btn from "../../Btn/Btn";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <img className={styles.layerBg} src={layerBg} alt="layer" />
      <div className={styles.crossWrapper}>
        <img className={styles.cross} src={cross} alt="layer" />
      </div>
      <div className={styles.cross2Wrapper}>
        <img className={styles.cross2} src={cross} alt="layer" />
      </div>
      <img className={styles.banner1} src={banner1} alt="banner" />
      <img className={styles.banner2} src={banner2} alt="banner" />
      <img className={styles.dots} src={dots} alt="banner" />
      <div className={styles.bannerDescr}>
        <div className={styles.subTitleWrapper}>
          <h4>Gaming Consoles</h4>
          <img src={arrows} alt="flame" />
          <img src={arrows} alt="flame" />
        </div>
        <h1>
          <span className={styles.titleTry}>Try It, Rent It,</span> <br />
          <span className={styles.titleTrySave}>Save</span>
          <span className={styles.titleCost}>$50!</span>
        </h1>
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters as opposed.
        </p>
        <Btn className={styles.btn} />
      </div>
      <div className={styles.boyWrapper}>
        <img className={styles.hole} src={hole} alt="layer" />
        <img className={styles.boy} src={boy} alt="boy" />
      </div>
    </section>
  );
};

export default Banner;
