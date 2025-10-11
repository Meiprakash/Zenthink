"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const works = [
  {
    title: "Redesign a website",
    description:
      "We help revamp your site to reflect your goals and connect with users.",
    image: "/project-01.png",
    link: "/work/wireframe-design",
  },
  {
    title: "How to build solid portfolio",
    description: "Create a portfolio that highlights your best work.",
    image: "/project-03.png",
    link: "/work/branding-mockup",
  },
  {
    title: "Illustrator of the year",
    description:
      "Modernize your site with strategic design updates that improve usability and visual appeal.",
    image: "/project-05.png",
    link: "/work/dashboard-ui",
  },
  {
    title: "Web Design for Inspiring",
    description:
      "Add life to your brand through animation, movement, and storytelling.",
    image: "/project-06.png",
    link: "/work/dashboard-ui",
  },
];

const RecentWork: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          {/* Left title part */}
          <div>
            <p className="text-lg text-gray-800 mb-3 flex items-center gap-2">
              Recent work
              <span>
                <Image
                  src="/badge-icon.jpg"
                  alt="badge"
                  width={16}
                  height={16}
                />
              </span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Explore Our <br className="hidden md:block" />
              Amazing Works
            </h2>
          </div>

          {/* Right description part */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            We believe great work comes from clear collaboration. Our process is
            designed to guide. Most of our work is protected under NDAs, but
            here is a small glimpse into our Work.
          </p>
        </motion.div>

        {/* ✅ Asymmetric Grid Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-8"
          >
            <WorkCard work={works[0]} height="h-[500px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-4"
          >
            <WorkCard work={works[1]} height="h-[500px]" />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-5"
          >
            <WorkCard work={works[2]} height="h-[420px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-7"
          >
            <WorkCard work={works[3]} height="h-[420px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

// 🔹 Reusable WorkCard Component
const WorkCard = ({ work, height }: { work: any; height: string }) => (
  <Link
    href={work.link}
    className="block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500"
  >
    {/* 🔸 Image hover only */}
    <div className={`overflow-hidden rounded-3xl group ${height}`}>
      <Image
        src={work.image}
        alt={work.title}
        width={800}
        height={600}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className=" mt-10 ml-4 ">
      <p className="text-md text-gray-600  mb-3 flex items-center gap-2">
        <span className="m-0">2025</span>
        <span className="w-2 h-2 bg-gray-800 rounded-full inline-block mx-2" />
        <span>Web Design</span>
      </p>
    </div>
    {/* Text area */}
    <div className="pl-6 pr-6 pb-6">
      <h3 className="text-3xl  text-gray-900 mb-1">
        {work.title}
      </h3>
      <p className="text-gray-600 p-3 text-lg">{work.description}</p>
    </div>
  </Link>
);
