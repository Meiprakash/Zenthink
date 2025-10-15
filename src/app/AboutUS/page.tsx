"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import SecondComp from "./Image";
import StatsSection from "./CountUP";
import Values from "./Values";
import AwardsSection from "./AwardsSection";
import ProcessSection from "./Process";

export default function Hero() {
  // container variant for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each child
      },
    },
  };

  // child animation variant
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div className="bg-white">
      <Navbar />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-5 gap-4 md:mt-3 p-10"
      >
        {/* Hero Heading */}
        <motion.p
          variants={item}
          className="col-span-3 text-gray-950 md:text-6xl sm:text-3xl md:m-7 md:ml-23 md:mt-10 sm:mt-10 flex-1"
        >
          We’re a Creative Agency with
          <span className="text-gray-700"> Heart</span> and{" "}
          <span className="text-gray-700">Vision</span>
        </motion.p>

        {/* Award Image */}
        <motion.div
          variants={item}
          className="col-span-2 md:mt-15 sm:mt-12 md:ml-23 sm:m-9"
        >
          <Image
            src="/hero-award-img.jpg"
            alt="star-image"
            width={200}
            height={200}
            className="sm:mb-4 md:w-13 sm:w-12"
          />
          <span className="text-gray-800 md:text-lg sm:mt-8 sm:text-sm">
            2025 Best Award
          </span>
        </motion.div>

        {/* Active Users */}
        <motion.div
          variants={item}
          className="col-span-2 md:ml-22 flex items-center gap-3 md:h-13 sm:h-10"
        >
          <Image
            src="/about-avater-group.jpg"
            alt="user-img"
            width={200}
            height={200}
            className="h-full w-auto object-contain"
          />
          <p className="text-black grid justify-center h-full leading-tight">
            <span className="md:text-xl sm:text-sm">120K +</span>
            <span className="text-gray-600 md:text-md sm:text-sm">
              Active users
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={item}
          className="col-span-3 md:pl-15 md:mr-38 md:ml-20"
        >
          <h2 className="md:text-lg text-gray-500 sm:text-sm sm:ml-9 sm:mr-5">
            We combine bold ideas with smart strategy to design brand
            experiences that connect, convert, and inspire. From startups to
            industry leaders.
          </h2>
        </motion.div>
      </motion.div>
      <SecondComp />
      <StatsSection />
      <Values />
      <AwardsSection />
      <ProcessSection/>
    </div>
  );
}
