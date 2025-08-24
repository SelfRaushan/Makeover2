
import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  bridalImages,
  partyImages,
  engagementImages,
  familyImages,
  hdAirbrushImages,
  globToArray,
} from "../utility/importImages";

const categories = [
  { id: "All", label: "All" },
  { id: "Bridal", label: "Bridal" },
  { id: "Party & Event", label: "Party & Event" },
  { id: "HD Airbrush", label: "HD Airbrush" },
  { id: "Engagement", label: "Engagement" },
  { id: "Family & Bridesmaid", label: "Family & Bridesmaid" },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image for fullscreen
  const filterRef = useRef(null);

  const bridalImgs = globToArray(bridalImages);
  const partyImgs = globToArray(partyImages);
  const engagementImgs = globToArray(engagementImages);
  const familyImgs = globToArray(familyImages);
  const hdImgs = globToArray(hdAirbrushImages);

  const allItems = useMemo(
    () => [
      ...bridalImgs.map((src, i) => ({ id: `bridal-${i}`, category: "Bridal", src })),
      ...partyImgs.map((src, i) => ({ id: `party-${i}`, category: "Party & Event", src })),
      ...engagementImgs.map((src, i) => ({ id: `engagement-${i}`, category: "Engagement", src })),
      ...familyImgs.map((src, i) => ({ id: `family-${i}`, category: "Family & Bridesmaid", src })),
      ...hdImgs.map((src, i) => ({ id: `hdAirbrush-${i}`, category: "HD Airbrush", src })),
    ],
    [bridalImgs, partyImgs, engagementImgs, familyImgs, hdImgs]
  );

  const filteredItems = useMemo(() => {
    if (filter === "All") return allItems;
    return allItems.filter((item) => item.category === filter);
  }, [filter, allItems]);

  // Function to handle image click for fullscreen
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  // Function to close the fullscreen image
  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  // Sticky filter bar behavior unchanged
  useEffect(() => {
    const filterEl = filterRef.current;
    const navbar = document.querySelector("#navbar");

    function onScroll() {
      if (!filterEl || !navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      const filterRect = filterEl.getBoundingClientRect();

      if (navbarRect.bottom >= filterRect.top) {
        filterEl.style.position = "absolute";
        filterEl.style.top = `${window.scrollY + navbarRect.bottom}px`;
        filterEl.style.width = "100%";
        filterEl.style.zIndex = 1000;
      } else if (window.scrollY + navbarRect.bottom > filterEl.offsetTop) {
        filterEl.style.position = "sticky";
        filterEl.style.top = "0";
        filterEl.style.width = "100%";
        filterEl.style.zIndex = 1000;
      } else {
        filterEl.style.position = "static";
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation for fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="portfolio" className="py-16 bg-pink-50 px-6 relative flex flex-col items-center">
      {/* Header */}
      <motion.div
        className="max-w-4xl text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
      >
        <span className="text-pink-700 text-xl font-bold inline-block mb-2 pb-1 select-none bg-gradient-to-r from-pink-300 via-pink-600 to-pink-400 bg-clip-text text-transparent drop-shadow-md transition duration-300 ease-in-out hover:drop-shadow-lg">
          Portfolio
        </span>
        <h2 className="text-4xl font-extrabold text-pink-800">
          Our Stunning Makeup Transformations
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-700">
          Explore our curated collection showcasing bridal, party, airbrush, engagement, and family makeup looks.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div
        ref={filterRef}
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8 py-2 z-30"
        style={{ backgroundColor: "transparent" }}
      >
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition select-none ${
              filter === id
                ? "bg-pink-600 text-white"
                : "bg-white text-pink-700 border border-pink-600 hover:bg-pink-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Masonry grid using CSS columns with responsive column count */}
      <motion.div
        className="w-full max-w-7xl"
        layout
      >
        <div
          className="masonry"
          style={{
            columnGap: "6px",
            columnCount: 4,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(({ id, src, category }) => (
              <motion.div
                key={id}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeInUp}
                className="masonry-item relative break-inside-avoid mb-2 overflow-hidden rounded-lg cursor-pointer shadow-md"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleImageClick(src)} // Add onClick handler here
              >
                <img
                  src={src}
                  alt={`${category} Portfolio`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg block"
                />

                {/* Hover overlay with transparent dark background and text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg pointer-events-none"
                >
                  <p className="text-white text-center px-3 text-lg font-semibold select-none">
                    {category}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }} // Slightly longer fade for modal background
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Slightly longer fade for modal background
            onClick={closeFullscreen} // Close modal when clicking outside the image
          >
            <motion.img
              src={selectedImage}
              alt="Fullscreen View"
              className="max-w-full max-h-screen object-contain rounded-lg shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: "backOut", delay: 0.1 } }} // More dynamic entrance with delay
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            />
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50 p-2 rounded-full bg-pink-600 hover:bg-pink-700 transition duration-300"
              aria-label="Close fullscreen image"
              initial={{ opacity: 0, scale: 0.8 }} // Initial state for close button animation
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } }} // Animation for close button
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS for masonry column counts */}
      <style jsx>{`
        .masonry {
          column-fill: balance;
          /* no horizontal scroll */
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 2px;
          position: relative;
        }
        /* Responsive column counts */
        @media (max-width: 1024px) {
          .masonry {
            column-count: 3 !important;
          }
        }
        @media (max-width: 768px) {
          .masonry {
            column-count: 2 !important;
          }
        }
        @media (max-width: 480px) {
          .masonry {
            column-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
