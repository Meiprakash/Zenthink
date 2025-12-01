"use client";

import { Layers } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const rotatingTexts = [
  { id: 1, name: "Web Design" },
  { id: 2, name: " UX Design" },
  { id: 1, name: "Branding" },
  { id: 2, name: "UI Design" },
  { id: 1, name: "Web Design" },
  { id: 2, name: "UX Design" },
  { id: 1, name: "Branding" },
  { id: 2, name: "UI Design" },
];
const positions = [
  "translate-x-[30%]", 
  "-translate-x-[10%]",
  "translate-x-[40%]", 
  "-translate-x-[5%]", 
  "translate-x-[40%]", 
  "-translate-x-[10%]", 
  "translate-x-[43%]", 
  "-translate-x-[10%]", 
];
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden "
      // style={{ backgroundImage: "url('/hero-bg.webp')" }}
    >
      <div className="max-w-7xl mx-auto  px-6 py-10 sm:py-24 flex flex-col md:flex-row items-center justify-between gap-10 ">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="max-w-2xl space-y-6 text-start md:text-left"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold leading-tight text-black"
          >
            Engineering{"  "}
            <span className="text-gray-400">Software Solutions</span> That Drive{" "}
            <span className="text-gray-400">Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600"
          >
            From enterprise applications to industry-specific platforms, we
            transform your business challenges into scalable software solutions.
            Let&apo;s build your digital future—together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col  sm:flex-row items-start gap-4 mt-6"
          >
            {/* Let's work button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg bg-black px-3 sm:px-6 py-3 sm:py-3  text-white font-sm sm:font-medium group cursor-pointer"
            >
              <Link href="/Contact">
                <span className="relative z-10">Let’s Work Together ?</span>
                <span className="absolute inset-0 rounded-lg bg-violet-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </Link>
              <motion.span
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-blue-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
              ></motion.span>
            </motion.button>

            {/* Avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex  items-center space-x-3"
            >
              <div className="flex items-center ">
                <motion.img
                  src="about-avater-group.jpg"
                  className="w-full h-10 rounded-full  border-white"
                  alt="User"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              <span className="flex-col text-sm sm:text-lg md:text-xl text-gray-600">
                <strong>120K+</strong> Active users
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.4,
          }}
          className="relative  flex items-center    justify-between w-full md:w-1/2"
        >
          {/* FLOATING TAGS COLUMN */}
          <div className="h-[400px] md:h-[400px] overflow-hidden items-center  sm:px-50 md:px-2 px-3 sm:ml-10  md:ml-1  w-[200px]">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-col px-1  "
            >
              {[...rotatingTexts, ...rotatingTexts].map((text, i) => (
                <div
                  key={i}
                  className={`
           mb-12 md:mb-10 
bg-white/90 backdrop-blur-sm shadow-md shadow-gray-300/30 
border border-gray-200 text-black 
rounded-full px-3 py-2 sm:px-6 sm:py-3     /* smaller X padding */
text-[12px] md:text-[15px] font-medium 
flex items-center gap-1     /* smaller gap */
max-w-[190px] w-fit         /* fits inside 200px column */
truncate   
            ${positions[i % positions.length]}
          `}
                >
                  <span>{text.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* FLOATING SPHERE IMAGE */}
          <motion.div
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative  w-[160px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]"
          >
            <Image
              src="/hero.jpg"
              alt="Hero Pattern"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
