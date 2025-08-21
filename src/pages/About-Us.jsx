import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/image/bg2.jpg"; // Hero background image

// Import team photos from your assets folder
import team1 from "../assets/family-bridesmaid/javier-gonzalez-fotografo-NjMqSDSICeM-unsplash.jpg";
import team2 from "../assets/family-bridesmaid/michael-guertin-zXej2jcohGE-unsplash.jpg";
import team3 from "../assets/family-bridesmaid/gettyimages-2119442626-612x612.jpg";

const skills = [
  { name: "Makeup Artistry", percent: 95 },
  { name: "Customer Care", percent: 90 },
  { name: "Styling", percent: 85 },
  { name: "Bridal Consultation", percent: 80 },
];

const team = [
  { name: "Neha Sharma", role: "Lead Makeup Artist", img: team1 },
  { name: "Priya Patel", role: "Senior Stylist", img: team2 },
  { name: "Amit Kapoor", role: "Bridal Specialist", img: team3 },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-5"
        >
          <h1 className="text-5xl font-extrabold mb-4">About Our Makeup Artistry</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            Where beauty meets perfection — creating unforgettable looks tailored just for you.
          </p>
          <a
            href="#booking"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
          >
            Book Your Session
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-5 text-center text-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-pink-700">Who We Are</h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-lg">
          Our team of seasoned makeup artists, stylists, and beauty professionals is dedicated to making your day unforgettable.
          With over a decade of collective experience and an emphasis on personalized service, we turn your vision into reality —
          whether for a wedding, party, or special shoot.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto py-12 px-5">
        <h2 className="text-3xl font-bold mb-10 text-center text-pink-700">Our Expertise</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {skills.map(({ name, percent }) => (
            <div key={name}>
              <div className="flex justify-between mb-1 font-semibold text-pink-600">
                <span>{name}</span>
                <span>{percent}%</span>
              </div>
              <div className="w-full bg-pink-200 rounded-full h-4">
                <div
                  className="bg-pink-600 h-4 rounded-full transition-all"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-bold mb-10 text-center text-pink-700">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map(({ name, role, img }) => (
            <div key={name} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={img}
                alt={name}
                className="mx-auto rounded-full h-40 w-40 object-cover mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-pink-700">{name}</h3>
              <p className="text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 py-12 text-white text-center rounded-t-3xl px-5">
        <h3 className="text-3xl font-bold mb-4">Ready for your transformation?</h3>
        <a
          href="#booking"
          className="inline-block bg-white text-pink-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-pink-50 transition"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
