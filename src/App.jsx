import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import ScrollToTop from "./Components/HelperComopnents/ScrollToTop";
import CarDetails from "./Components/CarsComponents/CarDetails";
import CarDetails2 from "./Components/CarsComponents/CarDetails2";
import Notfound from "./Components/HelperComopnents/Notfound";

function App() {
  const hideNavbarRoutes = [""]; // add more paths if needed
  const shouldHideNavbar = hideNavbarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        {/* <Route path="/cardetails/:id" element={<CarDetails2 />} /> */}

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
