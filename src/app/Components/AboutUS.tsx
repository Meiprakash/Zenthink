"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

interface AccordionItem {
  title: string;
  content: string;
}

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: AccordionItem[] = [
    {
      title: " 100+ Projects Delivered ",
      content:
        "From concept to deployment, we've transformed business challenges into powerful software solutions across 10+ industries, delivering measurable ROI and sustainable growth for every client.",
    },
    {
      title: "1K+ Happy Clients",
      content:
        "Our success is measured by yours. We build lasting partnerships through transparent communication, agile development, and unwavering commitment to your business objectives and technical excellence",
    },
    {
      title: "10+ Countries",
      content:
        "Global presence, personalized service. We bring world-class software expertise to businesses worldwide, adapting our solutions to local markets while maintaining international quality standards.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easeOut },
    },
  };

  return (
    <section className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-10 lg:py-12 font-[Inter,sans-serif]">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Top label + 2-column header row */}
        <motion.div className="mb-6 sm:mb-8" variants={fadeUp}>
          <p className="text-md sm:text-lg text-neutral-900 mb-3 flex items-center gap-2">
            About us{" "}
            <span>
              <Image
                src="/badge-icon.webp"
                alt="badge"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </p>

          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 xs:gap-8 items-start">
            {/* Left: Heading */}
            <div>
              <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                Our Approach is Innovative{" "}
                <br className="hidden sm:block" />
                and Results-Focused.
              </h2>
            </div>

            {/* Right: Description */}
            <div>
              <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                Custom software development, robust enterprise solutions, or
                scalable digital platforms. Our team excels across multiple
                technology domains, including cloud architecture, application
                development, system integration, and more.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main grid: image (left) and accordion (right) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left: Video thumbnail / image */}
          <motion.div variants={fadeUp} className="w-full">
            <div className="relative w-full h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[380px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:shadow-[0_8px_40px_rgba(0,0,0,0.06)] bg-white/60 border border-white/30">
              {/* subtle overlay for frosted look */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/0 z-10 pointer-events-none" />
              <Image
                src="/videimg.jpg"
                alt="About video"
                fill
                className="w-full h-full object-cover brightness-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Play CTA */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="Play Video"
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="bg-white hover:bg-white/95 transition p-3 sm:p-4 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right: Accordion */}
           <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 pb-2 w-full sm:w-3/3 overflow-x-hidden"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-blue-10 box-border border border-neutral-200  overflow-hidden transition-all duration-300 p-3 ${
                  activeIndex === i
                    ? "bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)"
                    : "bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/trophy.png"
                      alt="icon"
                      width={16}
                      height={16}
                      className="w-5 md:w-6"
                    />
                    <span className="font-semibold text-lg text-neutral-800">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <Image
                      src="/Earo_Up.png"
                      alt="toggle"
                      width={16}
                      height={16}
                      className="w-4 md:w-5"
                    />
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="px-6 pb-5 text-neutral-600 text-[15px] leading-relaxed">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Video modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/80 hover:bg-white text-black p-1.5 sm:p-2 rounded-full z-50 transition"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div
            className="relative w-full max-w-[95%] xs:max-w-[92%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] aspect-video bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZW-Q2vi9sOI?autoplay=1&rel=0"
              title="About Us Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}