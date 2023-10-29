import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import AboutXboxPC from "./AboutXboxPC/AboutXboxPC";
import Pricing from "./Pricing/Pricing";

const Main = () => {
  return (
    <main>
      <Banner />
      <About />
      <AboutXboxPC />
      <Pricing />
    </main>
  );
};

export default Main;
