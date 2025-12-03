import React from 'react'
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
      const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true , amount:0.1 }}
        className="
          grid 
          grid-cols-1
          sm:grid-cols-5
          md:grid-cols-5
          lg:grid-cols-5
          gap-2 sm:gap-8 
          px-6 sm:px-8 md:px-16
          py-10 md:py-20
        "
      >
        {/* 1) HEADING */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
          order-1 sm:order-1
          col-span-1 sm:col-span-3 sm:mt-10 md:mt-1 sm:ml-12
          leading-tight tracking-tight text-[30px] md:text-[60px] font-medium leading-light text-black"
        >
          We’re a Technology Partner with <span className="text-neutral-500">Vision</span> and <span className="text-neutral-500">Precision</span>
        </motion.h1>

        {/* 2) AWARD */}
        <motion.div
          variants={item}
          className="
            order-2 sm:order-2
            col-span-1 sm:col-span-2
            flex sm:block items-center sm:items-end gap-2
            mt-4 sm:mt-0 
          "
        >
          <div className=" flex sm:justify-baseline sm:ml-20 sm:mt-10">
            <Image
              src="/hero-award-img.jpg"
              alt="award"
              width={40}
              height={40}
              className="w-11 sm:w-12 md:w-12"
            />
          </div>
          <p className="text-neutral-800 text-[14px] md:text-lg mt-1 sm:text-start sm:ml-20">
            2025 Best Award
          </p>
        </motion.div>

        {/* 3) ACTIVE USERS (left column on sm+) */}
        <motion.div
          variants={item}
          className="
            order-5 sm:order-3
            col-span-1 sm:col-span-3
            flex items-center gap-3
            mt-6 sm:mt-6 sm:ml-12
          "
        >
          <Image
            src="/about-avater-group.jpg"
            alt="users"
            width={100}
            height={100}
            className="w-20 sm:w-24 md:w-28 object-contain"
          />
          <div className="leading-tight">
            <p className="text-black text-[14px] md:text-xl font-semibold">
              120K+
            </p>
            <p className="text-neutral-600 text-[14px] md:text-base">
              Active users
            </p>
          </div>
        </motion.div>

        {/* 4) DESCRIPTION (right column on sm+) */}
        <motion.p
          variants={item}
          className="
            order-4 sm:order-4
            col-span-1 sm:col-span-2
            text-neutral-600
            text-[14px] md:text-[16px]
            leading-relaxed
            mt-2 sm:mt-6 mr-4 
          "
        >
          We combine technical excellence with business strategy to engineer
          software solutions that scale, perform, and transform. From startups
          to enterprise leaders
        </motion.p>
      </motion.div>
    </div>
  )
}

export default HeroSection
