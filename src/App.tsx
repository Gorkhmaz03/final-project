import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home.tsx";
import Services from "./pages/Services/Services.tsx";
import Banner from "./pages/Banner/Banner.tsx";
import Testimonials from "./pages/Testimonials/Testimonials.tsx";
import AppStore from "./pages/AppStore/AppStore.tsx";
import Delivery from "./pages/Delivery/Delivery.tsx";
import About from "./pages/About/About.tsx";

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
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/appstore" element={<AppStore />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </Router>
      </>
    </div>
  );
};

export default App;
