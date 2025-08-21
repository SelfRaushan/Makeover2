import { motion } from "framer-motion";

const AnimatedButton = ({ children, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="animated-button" // you can add your styles here or in CSS
  >
    {children}
  </motion.button>
);

export default AnimatedButton;
