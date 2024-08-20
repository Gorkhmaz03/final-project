import React from "react";
import Hero from "./components/Hero/Hero.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Services from "./components/Services/Services.tsx";
import Banner from "./components/Banner/Banner.tsx";
import AppStore from "./components/AppStore/AppStore.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 700,
      easing: "ease-in",
      delay: 200,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
