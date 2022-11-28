import "./App.scss";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Header from "./components/layouts/Header/Header";
import Sellers from "./pages/Sellers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
