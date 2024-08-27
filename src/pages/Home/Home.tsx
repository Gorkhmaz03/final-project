import Hero from "../../components/Hero/Hero";
import TestimonialsUsers from "../../components/Testimonials/TestimonialsUser";
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
