import React from "react";
import styles from "./Main.module.css";
import Banner from "./Banner/Banner";
import About from "./About/About";
import AboutXboxPC from "./AboutXboxPC/AboutXboxPC";

const Main = () => {
  return (
    <main>
      <Banner />
      <About />
      <AboutXboxPC />
    </main>
  );
};

export default Main;
