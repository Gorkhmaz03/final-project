import React from "react";
import Hero from "../../components/Hero/Hero";
import TestimonialsUsers from "../../components/Testimonials/TestimonialsUser";
import Banner from "../Banner/Banner";
import ServicesCoffee from "../../components/Services/ServiceCoffee";
import AppStoreLogo from "../../components/AppStore/AppStoreLogo";
import BannerCoffee from "../../components/Banner/BannerCoffee";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesCoffee />
      <AppStoreLogo />
      <BannerCoffee />
      <TestimonialsUsers />
    </>
  );
};

export default Home;
