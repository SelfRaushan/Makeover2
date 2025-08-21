import { motion } from "framer-motion";
import react from "react";

import bg4 from "../assets/image/bg4.jpg";

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center from-pink-100 to-pink-300 px-5 text-center"
  style={{
    backgroundImage: `url(${bg4})`,
    backgroundSize: "cover", // Optional: Cover the section
    backgroundPosition: "center", // Optional: Center the image
  }}
>
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold text-pink-700 mb-4"
    >
      Your Bridal Glow Starts Here
    </motion.h1>
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-lg md:text-xl max-w-md mx-auto text-pink-900 mb-8"
    >
      Expert wedding makeup and styling tailored for your perfect day.
    </motion.p>
    <motion.a
      href="#booking"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-pink-600 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-pink-700 transition"
    >
      Book Your Appointment
    </motion.a>
  </section>
);

export default Hero;
