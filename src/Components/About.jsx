import React from "react";
import { motion } from "framer-motion";
import bg2 from "../assets/image/bg2.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-pink-100 to-pink-200">
      <div className=" ">

      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center gap-10 px-5">
        {/* Image with Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          viewport={{ once: true }}
        >
          <div
            className="rounded-3xl overflow-hidden shadow-lg w-[90vw] max-w-lg h-72 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg2})`,
            }}
          />
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div
          className="w-full md:w-1/2 relative z-10 bg-white/80 rounded-3xl p-8 shadow-xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 text-center md:text-left">
            About Us
          </h2>
          <p className="text-lg text-gray-700 text-center md:text-left leading-relaxed">
            We are a team of passionate makeup artists dedicated to making your
            special day unforgettable. With years of experience in the industry,
            we offer personalized services tailored to your unique style and preferences.
          </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default About;
