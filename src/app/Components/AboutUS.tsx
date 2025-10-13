"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, easeOut } from "framer-motion";

// Type definition for Accordion items
interface AccordionItem {
  title: string;
  content: string;
}

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: AccordionItem[] = [
    {
      title: "1K+ Projects Done",
      content:
        "Welcome Inovis where storytelling center we are more than video production company creative or the partners video welcome.",
    },
    {
      title: "5K+ Happy Clients",
      content:
        "We take pride in building long-term relationships with clients, delivering value through creativity, innovation, and collaboration.",
    },
    {
      title: "30+ Countries",
      content:
        "Our projects span over 30 countries, empowering brands globally with thoughtful design and visual storytelling.",
    },
  ];

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const scaleVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white relative">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Section */}
        <motion.p
          className="text-md text-gray-500 mb-2 flex items-center gap-2"
          variants={fadeUpVariant}
        >
          About us{" "}
          <span>
            <img src="badge-icon.webp" alt="" className="w-4" />
          </span>
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12"
          variants={fadeUpVariant}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Our Approach is Holistic <br className="hidden md:block" /> and
            Collaborative.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Website design, a fresh brand identity, or eye-catching marketing
            materials. Our team is skilled in a range of design disciplines,
            including graphic design, web design, UX/UI design, and more.
          </p>
        </motion.div>

        {/* Main Layout (Video + Accordion) */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Video Thumbnail */}
          <motion.div
            className="flex justify-center md:justify-start w-full h-100"
            variants={scaleVariant}
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
              <img
                src="videimg.jpg"
                alt="About Video"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="Play Video"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/70 hover:bg-white/90 transition p-4 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right: Accordion Section */}
          <motion.div
            className="flex flex-col justify-center gap-4"
            variants={containerVariant}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "bg-gray-200 shadow-md"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  {/* Left section (icon + text) */}
                  <div className="flex items-center gap-3">
                    <img src="trophy.png" alt="" className="w-6" />
                    <span className="font-semibold text-xl text-gray-800">
                      {item.title}
                    </span>
                  </div>

                  {/* Right arrow icon */}
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <img
                      src="Earo_Up.png"
                      alt="Arrow Icon"
                      className="w-5 opacity-80"
                    />
                  </span>
                </button>

                {/* Accordion content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-12 pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 bg-white/80 hover:bg-white text-black p-2 rounded-full z-50 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZW-Q2vi9sOI?autoplay=1&rel=0"
              title="About Us Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
