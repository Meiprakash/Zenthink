"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const works = [
  {
    title: "UIUX",
    description:
      "Add life to your brand through animation, movement, and storytelling.",
    image: "/project-01.png",
    link: "/Service/ui-ux",
  },
  {
    title: "Web Dev",
    description: "Create a portfolio that highlights your best work.",
    image: "/project-03.png",
    link: "/Service/web-dev",
  },
  {
    title: "Branding",
    description:
      "Modernize your site with strategic design updates that improve usability and visual appeal.",
    image: "/project-05.png",
    link: "/Service/branding",
  },
  {
    title: "Motion",
    description:
      "Add life to your brand through animation, movement, and storytelling.",
    image: "/project-06.png",
    link: "/Service/motion",
  },
];

const RecentWork: React.FC = () => {
  return (
    <section className="w-full bg-white  px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-row md:items-end justify-between mb-16 gap-6"
        >
          {/* Left title part */}
          <div>
            <p className="text-md sm:text-xl md:text-2xl lg:text-xl text-gray-800 mb-3 flex items-center gap-1">
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
            <div className="grid grid-cols-2 gap-10 mb-16">
              <h2 className="text-[15px] sm:text-3xl  md:text-5xl lg:text-[48px]  text-gray-900 leading-tight">
                We Engineer Solutions That Transform{" "}
                <br className="hidden md:block" />
                Businesses Into Leaders.
              </h2>
              <p className="text-gray-600 text-start text-[10px] md:text-[16px] sm:text-[15px] leading-relaxed md:ml-3">
                We help businesses scale through strategic software and digital
                innovation. From custom applications to enterprise platforms,
                our services are engineered to optimize your operations and
                drive competitive advantage.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ✅ Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          <motion.div className="col-span-1 sm:col-span-2 md:col-span-8">
            <WorkCard work={works[0]} height="h-[500px]" />
          </motion.div>

          <motion.div className="col-span-1 sm:col-span-2 md:col-span-4">
            <WorkCard work={works[1]} height="h-[500px]" />
          </motion.div>

          <motion.div className="col-span-1 sm:col-span-2 md:col-span-5">
            <WorkCard work={works[2]} height="h-[420px]" />
          </motion.div>

          <motion.div className="col-span-1 sm:col-span-2 md:col-span-7">
            <WorkCard work={works[3]} height="h-[420px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

// 🔹 Define a type for work items
interface WorkItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

// 🔹 Reusable WorkCard Component
const WorkCard = ({ work, height }: { work: WorkItem; height: string }) => (
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
      <h3 className="md:text-3xl  text-gray-900 mb-1">
        {work.title}
      </h3>
      <p className="text-gray-600 p-3 text-lg">{work.description}</p>
    </div>
  </Link>
);
