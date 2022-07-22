import React from "react";
import Slider from "../../components/slider/Slider";
import Special from "../../components/special/Special";
import Welcome from "../../components/welcome/Welcome";
import Gallery from "../gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Slider />
      <Welcome />
      <Special />
      <Gallery />
    </div>
  );
};

export default Home;
