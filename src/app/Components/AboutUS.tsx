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
    <section className="w-full px-6 md:px-16 py-16 bg-gray-50 font-[Inter,sans-serif]">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top label + 2-column header row */}
        <motion.div className="mb-8 " variants={fadeUp}>
          <p className="text-md text-gray-900 mb-3 flex items-center gap-2">
            About us{" "}
            <span>
              <Image
                src="/badge-icon.webp"
                alt="badge"
                width={16}
                height={16}
                className="w-4"
              />
            </span>
          </p>

          <div className="grid sm:grid-cols-2 gap-8 items-start ">
            {/* Left: Heading */}
            <div>
              <h2 className="text-[23px] sm:text-3xl  md:text-5xl lg:text-[48px] font-semibold text-gray-900 leading-tight tracking-tight">
                Our Approach is Innovative <br className="hidden md:block" />{" "}
                and Results-Focused.
              </h2>
            </div>

            {/* Right: Description */}
            <div>
              <p className="text-gray-600 text-[12px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3 md:mr-14">
                Custom software development, robust enterprise solutions, or
                scalable digital platforms. Our team excels across multiple
                technology domains, including cloud architecture, application
                development, system integration, and more.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main grid: image (left) and accordion (right) */}
        <div className="grid md:grid-cols-2   gap-5 items-start">
          {/* Left: Video thumbnail / image */}
          <motion.div variants={fadeUp} className="flex justify-start ">
            <div  className="relative w-full max-w-[560px] h-[260px] sm:h-[320px] md:h-[380px] rounded-[28px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] bg-white/60 border border-white/30 md:ml-8 mx-auto">
              {/* subtle overlay for frosted look */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/0 z-10 pointer-events-none" />
              <Image
                src="/videimg.jpg"
                alt="About video"
                fill
                className="w-full h-full object-cover rounded-[28px] brightness-60 "
              />

              {/* Play CTA */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="Play Video"
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="bg-white hover:bg-white/95 transition p-4 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 text-black"
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
            className="flex flex-col gap-4  w-full sm:w-3/3  overflow-x-hidden"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-blue-10 box-border border border-gray-200  overflow-hidden transition-all duration-300 p-3 ${
                  activeIndex === i
                    ? "bg-[#f7f7f7] shadow-sm"
                    : "bg-white hover:shadow-sm"
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
                      className="w-6"
                    />
                    <span className="font-semibold text-lg text-gray-800">
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
                      className="w-5 opacity-80"
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
                      <div className="px-6   b-5 text-gray-600 text-[15px] leading-relaxed">
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 bg-white/80 hover:bg-white text-black p-2 rounded-full z-50 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-[92%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
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
