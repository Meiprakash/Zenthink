"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Values = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 ">
      {/* ===== Section Header ===== */}
      <div className="flex items-center gap-2 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-900 text-lg md:text-xl font-semibold"
        >
          Values
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image src="/badge.jpg" alt="badge" width={22} height={22} />
        </motion.div>
      </div>

      {/* ===== Heading & Paragraph ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10"
      >
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 items-start ">
          {/* Left: Heading */}
          <div>
            <h2 className="text-[20px] sm:text-3xl   md:text-5xl lg:text-[48px] font-semibold text-gray-900 leading-tight tracking-tight">
              Driving Principles of Our Solutions
            </h2>
          </div>

          {/* Right: Description */}
          <div>
            <p className="text-gray-600 text-[11px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed  md:mt-3 md:mr-14">
              We believe great software comes from close collaboration. Our
              process is designed to guide you from initial discovery to final
              deployment—efficiently, strategically, and systematically.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ===== GRID Layout ===== */}
      <div
        className="
          mt-14
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          lg:grid-rows-2 
          gap-8
        "
      >
        {/* === Card 1: Creativity (spans 2 rows) === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)
 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all lg:row-span-2"
        >
          <div>
            <h2 className="text-black text-2xl font-bold mb-3">INNOVATION </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We explore your business challenges, objectives, and user needs.
              Through discovery workshops and technical assessments
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/value-card-img-01.jpg"
              width={70}
              height={70}
              alt="creativity"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* === Card 2: Collaboration (top middle) === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)
 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all"
        >
          <div>
            <h2 className="text-black text-2xl font-bold mb-3">
              COLLABORATION
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We partner with your team, aligning stakeholders and gathering
              requirements. Through agile sprints and transparent communication
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/value-card-img-02.jpg"
              width={70}
              height={70}
              alt="collaboration"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* === Card 3: Excellence (spans 2 rows) === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)
 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all lg:row-span-2"
        >
          <div>
            <h2 className="text-black text-2xl font-bold mb-3">QUALITY </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We ensure code excellence, security standards, and performance
              optimization. Through rigorous testing and peer reviews
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/value-card-img-04.jpg"
              width={70}
              height={70}
              alt="excellence"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* === Card 4: Innovation (bottom middle) === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)
 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all"
        >
          <div>
            <h2 className="text-black text-2xl font-bold mb-3">DELIVERY </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We deploy reliable solutions, provide comprehensive training, and
              ongoing support. Through structured implementation and
              maintenance.
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/value-card-img-03.jpg"
              width={70}
              height={70}
              alt="innovation"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
