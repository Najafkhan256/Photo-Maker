import React from "react";
import Cta from "../components/Cta";
import Banner from "../components/HomePage/Banner";
import Services from "../components/HomePage/Services";
import PhotoGraphySlider from "../components/PhotoGraphySlider";
import Pricing from "../components/Pricing";
import Subscriber from "../components/Subscriber";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <PhotoGraphySlider />
      <Subscriber />
      <Pricing />
      <Cta />
    </div>
  );
};

export default HomePage;
