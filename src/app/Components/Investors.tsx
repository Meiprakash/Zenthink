"use client";

import Image from "next/image";
import { motion ,easeOut } from "framer-motion";

const firstRow = [
  { src: "/intercomn.jpg", alt: "Intercom" },
  { src: "/deliver.jpg", alt: "Deliveroo" },
  { src: "/ventures.jpg", alt: "Ventures" },
  { src: "/Monzo.jpg", alt: "Monzo" },
];

const secondRow = [
  { src: "/Gocardles.jpg", alt: "GoCardless" },
  { src: "/snyk.jpg", alt: "Snyk" },
  { src: "/comply.jpg", alt: "Comply Advantage" },
  { src: "/UI_path.jpg", alt: "UiPath" },
  // { src: "/deliver.jpg", alt: "Deliveroo" },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut }, //  Correct type
  },
};

export default function InvestorsSection() {
  return (
    <section className="bg-gray-50 py-10 sm:py-20 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-2xl font-bold text-black mb-12 leading-snug"
        >
          Trusted investors and{" "}
          <span className="text-black">Unicorn founders</span>
        </motion.h2>

        {/* FIRST ROW */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-14 md:gap-40 mb-10"
        >
          {firstRow.map((logo, i) => (
            <motion.div
              key={i}
              variants={logoVariant}
              whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              className="opacity-90 grayscale flex justify-center items-center transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={100}
                className="object-contain max-w-[100px] sm:max-w-[120px] md:max-w-[160px]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* SECOND ROW */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-30"
        >
          {secondRow.map((logo, i) => (
            <motion.div
              key={i}
              variants={logoVariant}
              whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              className="opacity-90 grayscale flex justify-center items-center transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={100}
                className="object-contain max-w-[80px] sm:max-w-[100px] md:max-w-[130px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
