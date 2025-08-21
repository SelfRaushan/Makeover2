import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
  { id: "Party", label: "Party" },
  { id: "HD Airbrush", label: "HD Airbrush" },
  { id: "Engagement", label: "Engagement" },
  { id: "Family", label: "Family" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filterRef = useRef(null);

  const bridalImgs = globToArray(bridalImages);
  const partyImgs = globToArray(partyImages);
  const engagementImgs = globToArray(engagementImages);
  const familyImgs = globToArray(familyImages);
  const hdImgs = globToArray(hdAirbrushImages);

  const allItems = useMemo(
    () => [
      ...bridalImgs.map((src, i) => ({ id: `bridal-${i}`, category: "Bridal", src })),
      ...partyImgs.map((src, i) => ({ id: `party-${i}`, category: "Party", src })),
      ...engagementImgs.map((src, i) => ({ id: `engagement-${i}`, category: "Engagement", src })),
      ...familyImgs.map((src, i) => ({ id: `family-${i}`, category: "Family", src })),
      ...hdImgs.map((src, i) => ({ id: `hdAirbrush-${i}`, category: "HD Airbrush", src })),
    ],
    [bridalImgs, partyImgs, engagementImgs, familyImgs, hdImgs]
  );

  const filteredItems = useMemo(() => {
    if (filter === "All") return allItems;
    return allItems.filter(item => item.category === filter);
  }, [filter, allItems]);

  // Animation for fade and movement
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const shakeAnimation = {
    scale: 1.08,
    rotate: [0, 2, -2, 2, -2, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <main className="min-h-screen bg-pink-50 py-20 px-5 select-none">
      <header className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-700 mb-2">Portfolio</h1>
        <p className="text-pink-800 max-w-3xl mx-auto text-lg">
          Explore our curated work showcasing various makeup styles.
        </p>
      </header>

      <nav
        ref={filterRef}
        className="max-w-6xl mx-auto mb-10 flex flex-wrap justify-center gap-4 sticky top-20 bg-pink-50 z-40 py-4 rounded-xl"
      >
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition select-none ${
              filter === id
                ? "bg-pink-600 text-white"
                : "bg-white text-pink-700 border border-pink-600 hover:bg-pink-100"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {filteredItems.map(({ id, src, category }) => (
          <motion.figure
            key={id}
            className="relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            tabIndex={0}
            role="button"
          >
            <motion.img
              src={src}
              alt={`${category} makeup portfolio`}
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
              variants={{
                hover: {
                  scale: 1.05,
                  rotate: [0, 2, -2, 2, -2, 0],
                  boxShadow: "0 10px 30px rgba(220,38,38,0.5)",
                  zIndex: 1,
                },
              }}
              transition={{ duration: 0.4 }}
            />

            <motion.figcaption
              className="absolute inset-0 flex items-center justify-center rounded-xl text-white text-lg font-semibold"
              style={{ backgroundColor: 'rgba(251, 207, 232, 0)' }} // initial transparent light pink (using Tailwind pink-300 with opacity)
              variants={{
                hover: { backgroundColor: 'rgba(251, 207, 232, 0.3)', opacity: 1 }, // light pink with 30% opacity
              }}
              initial={{ opacity: 0, backgroundColor: 'rgba(251, 207, 232, 0)' }}
              whileHover="hover"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {category}
            </motion.figcaption>

          </motion.figure>
        ))}
      </div>
    </main>
  );
}
