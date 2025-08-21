import React from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { FaHeart, FaPalette, FaStar, FaBirthdayCake, FaGift } from "react-icons/fa";

// Custom vibrating text animation via framer-motion keyframes
const VibrateText = ({ children }) => {
  return (
    <motion.span
      animate={{
        x: [0, 1, -1, 1, -1, 0],
        y: [0, -1, 1, -1, 1, 0],
        rotate: [0, 0.5, -0.5, 0.5, -0.5, 0],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

const serviceData = [
  {
    id: 1,
    title: "Bridal Makeup",
    description:
      "Flawless, high-definition bridal looks, including HD and airbrush makeup styles tailored for your perfect day.",
    icon: FaHeart,
  },
  {
    id: 2,
    title: "Party & Event Makeup",
    description:
      "Stunning and glamorous makeup to make you shine at any party or special event.",
    icon: FaPalette,
  },
  {
    id: 3,
    title: "Everyday Glam",
    description:
      "Natural, elegant makeup designed for everyday confidence and charm.",
    icon: FaStar,
  },
  {
    id: 4,
    title: "Birthday & Special Occasions",
    description:
      "Celebrate your special moments with flawless makeup curated just for you.",
    icon: FaBirthdayCake,
  },
  {
    id: 5,
    title: "Custom Looks & Styling",
    description:
      "Personalized makeup and styling sessions tailored to your unique vision and style.",
    icon: FaGift,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    scale: 1.07,
    boxShadow: "0 12px 40px rgba(220,38,38,0.4)",
    rotate: [0, 2, -2, 2, -2, 0],
    transition: { duration: 0.4 },
  },
};

const iconVariants = {
  hover: {
    y: [0, -6, 0],
    transition: { repeat: Infinity, repeatType: "loop", duration: 1.2 },
  },
};

const ServicePage = () => {
  return (
    <main className="min-h-screen bg-pink-50 py-20 px-5 select-none">
      {/* Hero Section with vibrating heading */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <motion.h1
          className="text-6xl font-extrabold text-pink-700 mb-8 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <VibrateText>Expert Makeup Services</VibrateText>
        </motion.h1>
        <motion.p
          className="text-xl text-pink-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience personalized makeup artistry for weddings, parties, daily glam,
          and special occasions crafted to make you look and feel radiant.
        </motion.p>
      </section>

      {/* Services Grid with hover animations */}
      <motion.section
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {serviceData.map(({ id, title, description, icon: Icon }) => (
          <motion.div
            key={id}
            className="bg-white rounded-2xl p-10 shadow-lg cursor-pointer flex flex-col items-center text-center text-pink-700"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div
              className="bg-pink-600 text-white rounded-full p-6 mb-8 inline-flex items-center justify-center"
              variants={iconVariants}
            >
              <Icon size={48} />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold mb-4"
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, -5, 0] }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h3>
            <motion.p className="text-sm leading-relaxed px-3">{description}</motion.p>
          </motion.div>
        ))}
      </motion.section>

      {/* Service Highlights */}
      <section className="max-w-4xl mx-auto mt-24 px-6 text-center text-pink-700">
        <motion.h2
          className="text-4xl font-extrabold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We use top-quality products, deliver bespoke consultations, and create
          stunning, long-lasting makeup looks tailored to your personality and occasion.
          Trust us to make every moment as picture-perfect as you imagine.
        </motion.p>
      </section>

      {/* Booking Call to Action with pulse animation */}
      <motion.section
        className="mt-32 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="#booking"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg rounded-full px-20 py-5 shadow-xl"
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(220,38,38,0.8)" }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 10px rgba(220,38,38,0.6)",
              "0 0 20px rgba(220,38,38,1)",
              "0 0 10px rgba(220,38,38,0.6)",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3,
          }}
        >
          Book Your Appointment
        </motion.a>
      </motion.section>
    </main>
  );
};

export default ServicePage;
