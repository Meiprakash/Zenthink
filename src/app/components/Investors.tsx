"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const firstRow = [
  { src: "/2.png", alt: "Intercom" },
  { src: "/3.png", alt: "Deliveroo" },
  { src: "/4.png", alt: "Ventures" },
  { src: "/5.png", alt: "Monzo" },
];

const secondRow = [
  { src: "/6.png", alt: "GoCardless" },
  { src: "/7.png", alt: "Snyk" },
  { src: "/8.png", alt: "Comply Advantage" },
  { src: "/9.png", alt: "UiPath" },
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
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function InvestorsSection() {
  return (
    <section
      id="investors-section"
      className="py-8 sm:py-10 md:py-9 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-black mb-8 sm:mb-10 md:mb-16 leading-snug"
        >
          Trusted investors and{" "}
          <span className="text-black">Unicorn founders</span>
        </motion.h2>

        {/* FIRST ROW */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6 md:gap-10 lg:gap-14 xl:gap-38 mb-6 sm:mb-8 md:mb-2"
        >
          {firstRow.map((logo, i) => (
            <motion.div
              key={i}
              variants={logoVariant}
              whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              className="  opacity-90 grayscale flex justify-center items-center transition-all duration-300 p-1 xs:p-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="object-cover rounded-full border border-neutral-100 w-[50px] h-[50px] xs:w-[60px] xs:h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[95px] lg:h-[95px] xl:w-[90px] xl:h-[90px]"
                // className="object-contain w-[70px] h-[25px] xs:w-[80px] xs:h-[30px] sm:w-[90px] sm:h-[35px] md:w-[110px] md:h-[45px] lg:w-[230px] lg:h-[100px] xl:w-[190px] xl:h-[80px]"
                sizes="(max-width: 640px) 70px, (max-width: 768px) 90px, (max-width: 1024px) 110px, (max-width: 1280px) 130px, 160px"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* SECOND ROW */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        >
          {secondRow.map((logo, i) => (
            <motion.div
              key={i}
              variants={logoVariant}
              whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              className=" opacity-90 grayscale flex justify-center items-center sm:p-10 transition-all duration-300 xs:p-2 "
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={50}
                // className=" object-contain w-[60px] h-[20px] xs:w-[70px] xs:h-[25px] sm:w-[80px] sm:h-[30px] md:w-[90px] md:h-[35px] lg:w-[110px] lg:h-[40px] xl:w-[190px] xl:h-[80px]"
                className="object-cover rounded-full border border-neutral-100 w-[45px] h-[45px] xs:w-[55px] xs:h-[55px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] xl:w-[90px] xl:h-[90px]"
                sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, (max-width: 1024px) 90px, (max-width: 1280px) 110px, 130px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}