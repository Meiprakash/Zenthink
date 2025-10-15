"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ConnectSection = () => {
  return (
    <section className="relative w-full bg-white py-28 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Left Sphere */}
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[450px] h-[450px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] opacity-90"
      >
        <Image
          src="/cta-shape-left.jpg"
          alt="Left Sphere"
          width={450}
          height={450}
          className="object-contain w-full h-full"
        />
      </motion.div>

      {/* Right Sphere */}
      <motion.div
        initial={{ x: 250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[450px] h-[450px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] opacity-90"
      >
        <Image
          src="/cta-shape-right.jpg"
          alt="Right Sphere"
          width={450}
          height={450}
          className="object-contain w-300 h-full"
        />
      </motion.div>

      {/* Center Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[90%] md:max-w-3xl mx-auto px-4"
      >
        <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-gray-900 leading-tight">
          Let’s Connect
        </h2>
        <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-semibold text-gray-400 mt-2 leading-tight">
          With Us!
        </h3>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block"
        >
          <Link
            href="/contact"
            className="relative overflow-hidden inline-block rounded-lg px-8 py-3 bg-black text-white font-medium group"
          >
            <span className="relative z-10">Contact us?</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConnectSection;
