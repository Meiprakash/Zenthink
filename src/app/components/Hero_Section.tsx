"use client";
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
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="w-full md:w-1/2 space-y-4 xs:space-y-5 sm:space-y-6 text-left"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.2] md:leading-[1.1] text-black"
          >
            Your <span className="text-neutral-500">IT</span>{" "}
            <span className="text-neutral-500">Department,</span>Virtually{" "}
            {/* <span className="text-neutral-500">Business</span> Growth */}
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-neutral-600 text-[14px] sm:text-lg leading-relaxed px-2 xs:px-0"
          >
            Native App, Hybrid App, Website, Web App, Software, Cloud Solution
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-6"
          >
            {/* Let's work button */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg bg-black px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 sm:py-3 text-white font-medium group cursor-pointer"
            >
              <Link href="#" className="block">
                <span className="relative z-10 text-[14px] sm:text-md">
                  Let’s Work Together
                </span>
                <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </Link>
            </motion.div>

            {/* Avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-3"
            >
              <div className="flex items-center">
                <Image
                  src="/about-avater-group.jpg"
                  width={40}
                  height={40}
                  className="min-w-16 h-7.5 md:min-w-20 md:h-10 rounded-full border-2 border-white"
                  alt="User avatars"
                />
              </div>

              <span className="flex-col text-[14px] sm:text-base md:text-lg lg:text-xl text-neutral-600">
                <span className="font-medium text-black">120K+</span> Active
                users
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
          className="relative flex items-center justify-center md:justify-center w-full md:w-1/2 mt-6 sm:mt-8 md:mt-0"
        >
          {/* FLOATING TAGS COLUMN */}
          <div className="h-[220px] xs:h-[240px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] overflow-hidden items-center w-[180px] sm:w-[160px] md:w-[200px] lg:w-[380px]">
            <motion.div
              animate={{
                scale: [1],
              }}
              className="absolute top-1/3 left-24 md:left-10 -translate-y-1/3 w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-lime-500/20 to-transparent blur-2xl sm:blur-3xl"
            />
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-col px-1"
            >
              {[...rotatingTexts, ...rotatingTexts].map((text, i) => (
                <div
                  key={i}
                  className={`
                    mb-8 xs:mb-10 sm:mb-12 md:mb-10 
                    bg-white/90 backdrop-blur-sm shadow-md shadow-neutral-300/10 text-black 
                    rounded-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3   
                    text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-medium 
                    flex items-center justify-center gap-1   
                    w-2/3 ml-5
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
            className="relative w-[140px] h-[220px] xs:w-[160px] xs:h-[260px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[280px] lg:h-[420px] xl:w-[340px] xl:h-[520px]"
          >
            <Image
              src="/hero.jpg"
              alt="Hero Pattern"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, (max-width: 1280px) 240px, 280px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}