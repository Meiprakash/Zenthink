"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorkItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const works: WorkItem[] = [
  {
    title: "UIUX",
    description:
      "Add life to your brand through animation, movement, and storytelling.",
    image: "/project-01.png",
    link: "/service/ui-ux",
  },
  {
    title: "Web Dev",
    description: "Create a portfolio that highlights your best work.",
    image: "/project-03.png",
    link: "/service/web-dev",
  },
  {
    title: "Branding",
    description:
      "Modernize your site with strategic design updates that improve usability and visual appeal.",
    image: "/project-05.png",
    link: "/service/branding",
  },
  {
    title: "Motion",
    description:
      "Add life to your brand through animation, movement, and storytelling.",
    image: "/project-06.png",
    link: "/service/motion",
  },
];

const RecentWork: React.FC = () => {
  return (
    <section className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-1 gap-6 md:gap-8"
        >
          {/* Left title part */}
          <div className="w-full">
            <p className="text-md sm:text-lg md:text-xl text-neutral-800 mb-3 flex items-center gap-1">
              Recent work
              <span>
                <Image
                  src="/badge-icon.jpg"
                  alt="badge"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </span>
            </p>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 mb-12 sm:mb-16">
              <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                We Engineer Solutions That Transform{" "}
                <br className="hidden sm:block" />
                Businesses Into Leaders.
              </h2>
              <p className="text-neutral-600 text-[14px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed md:mt-3">
                We help businesses scale through strategic software and digital
                innovation. From custom applications to enterprise platforms,
                our services are engineered to optimize your operations and
                drive competitive advantage.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ✅ Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          <motion.div 
            className="col-span-1 sm:col-span-1 lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <WorkCard work={works[0]} height="h-[200px] xs:h-[220px] sm:h-[280px] md:h-[350px] lg:h-[500px]" />
          </motion.div>

          <motion.div 
            className="col-span-1 sm:col-span-1 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <WorkCard work={works[1]} height="h-[200px] xs:h-[220px] sm:h-[280px] md:h-[350px] lg:h-[500px]" />
          </motion.div>

          <motion.div 
            className="col-span-1 sm:col-span-1 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <WorkCard work={works[2]} height="h-[200px] xs:h-[220px] sm:h-[250px] md:h-[320px] lg:h-[420px]" />
          </motion.div>

          <motion.div 
            className="col-span-1 sm:col-span-1 lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <WorkCard work={works[3]} height="h-[200px] xs:h-[220px] sm:h-[250px] md:h-[320px] lg:h-[420px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

// 🔹 Reusable WorkCard Component with proper types
interface WorkCardProps {
  work: WorkItem;
  height: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, height }) => (
  <Link
    href={work.link}
    className="block overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-neutral-200 bg-white shadow-xs transition-all duration-500"
  >
    {/* 🔸 Image hover only */}
    <div className={`overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl group ${height}`}>
      <Image
        src={work.image}
        alt={work.title}
        width={800}
        height={600}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
    <div className="mt-6 sm:mt-8 lg:mt-10 ml-3 sm:ml-4 lg:ml-4">
      <p className="text-xs xs:text-sm sm:text-md text-neutral-600 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
        <span className="m-0">2025</span>
        <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-neutral-800 rounded-full inline-block mx-1 xs:mx-2" />
        <span>Web Design</span>
      </p>
    </div>
    {/* Text area */}
    <div className="pl-3 sm:pl-4 lg:pl-6 pr-3 sm:pr-4 lg:pr-6 pb-4 sm:pb-5 lg:pb-6">
      <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-neutral-900 mb-1 sm:mb-2">
        {work.title}
      </h3>
      <p className="text-neutral-600 text-start text-sm xs:text-md sm:text-lg">
        {work.description}
      </p>
    </div>
  </Link>
);