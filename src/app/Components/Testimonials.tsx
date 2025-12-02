"use client";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeOut,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const testimonials = [
  {
    name: "Theresa Webb",
    title: "Head of marketing",
    text: "I love how easy this app is to use. It's completely changed the way I manage my day and keeps me from missing meetings or birthdays.",
    avatar: "/avatar-01.jpg",
  },
  {
    name: "Weeb Mike",
    title: "Head of operations",
    text: "This calendar app keeps me organized like never before. No need to rely on sticky notes—now everything is just a tap away.",
    avatar: "/avatar-02.jpg",
  },
  {
    name: "David James",
    title: "Head of finance",
    text: "This app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
    avatar: "/avatar-03.jpg",
  },
  {
    name: "Theresa Webb",
    title: "Head of marketing",
    text: "This calendar app keeps me organized like never before. No need to rely on sticky notes—now everything is just a tap away.",
    avatar: "/avatar-01.jpg",
  },
  {
    name: "Weeb Mike",
    title: "Head of operations",
    text: "This app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
    avatar: "/avatar-02.jpg",
  },
];

export default function TestimonialsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth parallax motion for large screens
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const x = useTransform(smoothScroll, [0, 1], ["0%", "-70%"]);

  // Animation Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.section
      ref={targetRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative  font-[Inter,sans-serif] py-[10vh]"
    >
      {/* Desktop Parallax Version */}
      <div className="hidden lg:block relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#f9fafb] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#f9fafb] to-transparent z-10 pointer-events-none" />

          <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
            {/* Header */}
            <motion.div
              variants={headerVariants}
              className="flex  flex-row md:items-end md:justify-between mb-16 "
            >
              <div className="">
                <p className="text-gray-800 text-sm sm:text-lg font-medium mb-2 flex items-center gap-2">
                  Testimonials{" "}
                  <Image
                    src="/badge.jpg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                </p>
                <h2 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Praise from our <br />
                  customers
                </h2>
              </div>
              <p className="text-gray-500 max-w-md mt-6 md:mt-0 text-start leading-relaxed">
                Our services help you create digital products. Stay ahead of the
                curve with our latest insights, tips, and industry trends.
              </p>
            </motion.div>

            {/* Horizontal scroll animation */}
            <motion.div
              style={{ x }}
              variants={containerVariants}
              className="flex gap-12"
            >
              {testimonials.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="flex-shrink-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-3xl shadow-sm p-8 w-[360px] border border-gray-100"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-4">
                    <Image
                      src="/stars.jpg"
                      alt="rating stars"
                      width={120}
                      height={20}
                      className="w-[120px] h-auto object-contain"
                    />
                  </div>
                  <p className="text-gray-700 text-xl  leading-relaxed mb-8">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-200 object-cover"
                    />
                    <div className="">
                      <p className="font-semibold text-gray-900 text-md">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-sm">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Version (Vertical Scroll) */}
      <motion.div
        variants={containerVariants}
        className="block lg:hidden w-full max-w-6xl mx-auto px-6 md:px-12"
      >
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-gray-800 text-md font-medium mb-2 flex items-center gap-2">
              Testimonials{" "}
              <Image
                src="/badge.jpg"
                alt="icon"
                width={16}
                height={16}
                className="inline-block"
              />
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Praise from our <br />
              customers
            </h2>
          </div>
          <p className="text-gray-500 max-w-md mt-6 md:mt-0 text-base leading-relaxed">
            Our services help you create digital products. Stay ahead of the
            curve with our latest insights, tips, and industry trends.
          </p>
        </motion.div>

        {/* Normal vertical list */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100"
            >
              <div className="mb-4">
                <Image
                  src="/stars.jpg"
                  alt="rating stars"
                  width={120}
                  height={20}
                  className="w-[120px] h-auto object-contain"
                />
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-200 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
