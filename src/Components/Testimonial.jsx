import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aarti Sharma",
    role: "Bride",
    text: "Lena transformed me into the most radiant bride imaginable—her makeup was flawless and lasted all day through every smile and tear.",
  },
  {
    name: "Neha Singh",
    role: "Party Guest",
    text: "Lena’s artistry elevated my party look to pure glam. I felt confident, glowing, and completely unforgettable.",
  },
  {
    name: "Priya Kumari",
    role: "Everyday Client",
    text: "Her skills make everyday special—natural, elegant, and personalized makeup that boosts my confidence like no other.",
  },
  {
    name: "Sara Kapoor",
    role: "Model",
    text: "Working with Lena is magic. She perfectly crafts looks that highlight your best features with impeccable precision.",
  },
  {
    name: "Riya Mehta",
    role: "Fashion Influencer",
    text: "Every session with Lena is pure artistry—she understands trends and tailors makeup to fit my evolving style flawlessly.",
  },
];

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    // Auto cycle every 8 seconds
    const timer = setTimeout(() => setIndex((index + 1) % length), 8000);
    return () => clearTimeout(timer);
  }, [index, length]);

  const next = () => setIndex((index + 1) % length);
  const prev = () => setIndex((index - 1 + length) % length);

  return (
    <section
      id="testimonials"
      className="py-20 bg-pink-50 px-5 max-w-3xl mx-auto relative select-none"
    >
      <h2 className="text-4xl font-extrabold text-pink-700 mb-12 tracking-wide text-center underline decoration-pink-400 decoration-4 underline-offset-8">
        What Our Clients Say
      </h2>

      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl p-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={transition}
            className="text-2xl italic text-pink-900 mb-6 relative z-10 leading-relaxed"
          >
            “{testimonials[index].text}”
          </motion.blockquote>
        </AnimatePresence>
        <motion.p
          key={`author-${index}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={transition}
          className="text-pink-700 font-semibold text-lg tracking-wide text-right mb-4"
        >
          — {testimonials[index].name},{" "}
          <span className="text-pink-500 font-normal italic">
            {testimonials[index].role}
          </span>
        </motion.p>

        {/* Floating animated shapes */}
        <motion.div
          aria-hidden="true"
          className="absolute top-6 left-6 w-5 h-5 bg-pink-400 rounded-full opacity-40"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-6 right-10 w-7 h-7 bg-pink-300 rounded-full opacity-30"
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-12 right-20 w-4 h-4 bg-pink-600 rounded-full opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Controls */}
        <div className="flex justify-center mt-6 space-x-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg shadow-lg transition"
          >
            Prev
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg shadow-lg transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
 