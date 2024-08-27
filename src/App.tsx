import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = lazy(() => import("./components/Navbar/Navbar.tsx"));
const Home = lazy(() => import("./pages/Home/Home.tsx"));
const Services = lazy(() => import("./pages/Services/Services.tsx"));
const Banner = lazy(() => import("./pages/Banner/Banner.tsx"));
const Testimonials = lazy(
  () => import("./pages/Testimonials/Testimonials.tsx")
);
const AppStore = lazy(() => import("./pages/AppStore/AppStore.tsx"));
const Delivery = lazy(() => import("./pages/Delivery/Delivery.tsx"));
const About = lazy(() => import("./pages/About/About.tsx"));

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
        <Suspense fallback={<h1>...Loading</h1>}>
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
        </Suspense>
      </>
    </div>
  );
};

export default App;
