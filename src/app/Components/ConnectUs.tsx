 "use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ConnectSection = () => {
  return (
    <section className="relative w-full bg-white py-28 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Left Sphere */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 opacity-80"
      >
        <Image
          src="/hero-shape.jpg" // 🔹 replace with your sphere image name
          alt="Sphere Left"
          width={400}
          height={400}
          className="object-contain w-full h-full"
        />
      </motion.div>

      {/* Right Sphere */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 opacity-80"
      >
        <Image
          src="/hero-shape.jpg" // 🔹 use same or different sphere
          alt="Sphere Right"
          width={400}
          height={400}
          className="object-contain w-full h-full"
        />
      </motion.div>

       {/* Center Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900">
          Let’s Connect
        </h2>
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-400 mt-2">
          With Us!
        </h3>

        <motion.div
           whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="relative overflow-hidden inline-block rounded-lg px-8 py-3 bg-black text-white font-medium group"
          >
            <span className="relative z-10">Contact us?</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConnectSection;
