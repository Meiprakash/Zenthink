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
      className="relative  font-[Inter,sans-serif]"
    >
      {/* Desktop Parallax Version */}
      <div className="hidden lg:block relative h-[200vh] bg-white">
        <div className="sticky top-0 h-auto py-20 flex items-center overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
            {/* Header */}
            <motion.div
              variants={headerVariants}
              className="flex flex-col sm:flex-row max-w-7xl mx-auto items-end justify-between gap-4 sm:gap-8 md:gap-12 mb-16"
            >
              <div className="">
                <p className="text-neutral-800 text-sm sm:text-lg font-medium mb-2 flex items-center gap-2">
                  Testimonials{" "}
                  <Image
                    src="/badge.jpg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                </p>
                <h2 className="text-[20px] sm:text-2xl md:text-4xl lg:text-[44px] font-medium text-neutral-900 leading-tight tracking-tight">
                  Praise from our <br />
                  customers
                </h2>
              </div>
              <p className="w-1/2 text-neutral-600 text-[12px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3 ">
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
                  className="flex-shrink-0 rounded-3xl shadow-sm p-8 w-[360px] border-1 border-neutral-50"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col justify-between items-start h-full">
                  <div className="flex flex-col gap-y-4">
                    <Image
                      src="/stars.jpg"
                      alt="rating stars"
                      width={120}
                      height={20}
                      className="w-[140px] h-auto object-contain"
                    />
                  <p className="text-neutral-700 text-xl leading-light font-medium mb-8">
                    {item.text}
                  </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full border border-neutral-200 object-cover"
                    />
                    <div className="">
                      <p className="font-semibold text-neutral-900 text-md">
                        {item.name}
                      </p>
                      <p className="text-neutral-500 text-sm">{item.title}</p>
                    </div>
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
        className="block lg:hidden w-full max-w-6xl mx-auto px-4 md:px-12 pt-10"
      >
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-neutral-800 text-md mb-2 flex items-center gap-2">
              Testimonials{" "}
              <Image
                src="/badge.jpg"
                alt="icon"
                width={16}
                height={16}
                className="inline-block"
              />
            </p>
            <h2 className="text-[30px] md:text-4xl font-bold text-neutral-900 leading-tight">
              Praise from our <br />
              customers
            </h2>
          </div>
          <p className="text-neutral-500 max-w-md mt-3 md:mt-0 text-[14px] md:text-base leading-relaxed">
            Our services help you create digital products. Stay ahead of the
            curve with our latest insights, tips, and industry trends.
          </p>
        </motion.div>

        {/* Normal vertical list */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-5"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-3xl shadow-sm p-8 border border-neutral-100"
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
              <p className="text-neutral-700 text-base leading-relaxed mb-8">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-neutral-200 object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-neutral-500 text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
