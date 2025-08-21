import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About-Us";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import BookingForm from "./pages/BookingForm";
import Contact from "./pages/Contact"; // Your contact page

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add 404 NotFound route if desired */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
