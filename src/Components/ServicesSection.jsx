import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaPalette,
  FaStar,
  FaBirthdayCake,
  FaGift,
} from "react-icons/fa";

const serviceData = [
  {
    title: "Bridal Makeup",
    description:
      "Flawless, high-definition looks, including HD and airbrush styles.",
    icon: <FaHeart className="text-pink-600" size={40} />,
  },
  {
    title: "Party & Event Makeup",
    description:
      "Glamorous, long-lasting makeup perfect for parties and special occasions.",
    icon: <FaBirthdayCake className="text-pink-600" size={40} />,
  },
  {
    title: "HD Airbrush Makeup",
    description:
      "Professional airbrush makeup providing a natural and flawless finish.",
    icon: <FaPalette className="text-pink-600" size={40} />,
  },
  {
    title: "Engagement Makeup",
    description:
      "Elegant and timeless makeup to celebrate your engagement moments.",
    icon: <FaGift className="text-pink-600" size={40} />,
  },
  {
    title: "Family & Bridesmaid Makeup",
    description:
      "Personalized makeup services for the bride’s family and guests.",
    icon: <FaStar className="text-pink-600" size={40} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    scale: 1.05,
    boxShadow: "0 12px 40px rgba(220,38,38,0.4)",
    rotateY: 10,
    rotateX: 5,
    transition: { duration: 0.4 },
  },
};

const iconVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const titleVariants = {
  hover: {
    rotate: [0, 3, -3, 3, -3, 0],
    transition: { duration: 0.6 },
  },
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    className="service-card bg-white shadow-md p-6 rounded-lg text-center cursor-pointer"
    variants={itemVariants}
    whileHover="hover"
    tabIndex={0}
  >
    <motion.div
      className="mb-4 inline-block"
      variants={iconVariants}
      animate="animate"
    >
      {icon}
    </motion.div>
    <motion.h3
      className="text-xl font-semibold text-pink-700 mb-2"
      variants={titleVariants}
    >
      {title}
    </motion.h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ServicesSection = () => (
  <section
    id="services"
    className="services-section py-20 px-5 bg-pink-50 select-none"
  >
    <div className="container mx-auto max-w-5xl text-center mb-12">
      <motion.h2
        className="text-3xl font-extrabold text-pink-700 mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-pink-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Expert makeup and styling services to make you shine on every occasion.
      </motion.p>
    </div>

    <motion.div
      className="container mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 md:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {serviceData.map((service) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </motion.div>
  </section>
);

export default ServicesSection;
