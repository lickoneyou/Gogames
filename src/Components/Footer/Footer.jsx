import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import fb from "../../assets/social/fb.png";
import tw from "../../assets/social/twitter.png";
import insta from "../../assets/social/instagram.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt={"logo"} />
      <p>Copyright © 2022 HEALAS.LT. All Rights Reserved.</p>
      <div className={styles.social}>
        <div>
          <img src={fb} alt="fb" />
        </div>
        <div>
          <img src={tw} alt="twitter" />
        </div>
        <div>
          <img src={insta} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
