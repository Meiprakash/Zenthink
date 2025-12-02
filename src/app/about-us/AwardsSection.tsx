"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  {
    id: 1,
    year: "2025",
    title: "Enterprise Solutions Scalable Systems for Complex Operations ",
    desc: "Delivered mission-critical applications handling millions of transactions daily—from supply chain management to financial processing with 99.9% uptime.",
    image: "/award-01.jpg",
  },
  {
    id: 2,
    year: "2024",
    title: "Digital Transformation Modernizing Legacy into Cloud-Native",
    desc: "Transformed outdated infrastructure for 200+ clients—migrating on-premise systems to cloud platforms while reducing costs by 40% and improving performance.",
    image: "/award-02.jpg",
  },
  {
    id: 3,
    year: "2023",
    title: "Industry Platforms Vertical-Specific Software Solutions",
    desc: "Built specialized platforms for healthcare (HIPAA-compliant), fintech (PCI-DSS certified), education (LMS), and logistics (real-time tracking) with domain expertise.",
    image: "/award-03.jpg",
  },
  {
    id: 4,
    year: "2022",
    title: "Integration Services Connecting Disparate Systems Seamlessly",
    desc: "Architected 500+ API integrations linking CRMs, ERPs, payment gateways, and third-party services—creating unified ecosystems that eliminate data silos.",
    image: "/award-04.jpg",
  },
];

const AwardsSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16  md:ml-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-neutral-900 text-lg font-medium"
        >
          Awards
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image src="/badge.jpg" alt="badge" width={20} height={20} />
        </motion.div>
      </div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex sm:flex-row md:flex-row md:justify-between mb-14 "
      >
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 items-start ">
          {/* Left: Heading */}
          <div>
            <h2 className="text-[20px] sm:text-3xl  md:text-5xl lg:text-[48px] font-semibold text-neutral-900 leading-tight tracking-tight">
              Expertise That Transforms Challenges Into Competitive Advantages
            </h2>
          </div>

          {/* Right: Description */}
          <div>
            <p className="text-neutral-600 text-[11px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3 md:mr-14">
              We help organizations scale through intelligent software and
              proven methodologies. From system modernization to new product
              development, our capabilities drive innovation and sustainable
              growth
            </p>
          </div>
        </div>
      </motion.div>

      {/* Awards List */}
      <div className="flex flex-col sm:flex-col-3 justify-between items-center">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex md:flex-row md:items-center md:gap-10 py-10"
          >
            {/* Image */}
            <div className="flex justify-center sm:mr-7">
              <Image
                src={award.image}
                alt={award.title}
                width={180}
                height={180}
                className="rounded-lg w-150 sm:w-60 object-cover shadow-sm"
              />
            </div>

            {/* Year */}
            <div className="flex w-full ml-10 sm:ml-2 sm:gap-10 md:gap-8 items-center justify-center">
              <div className="w-full md:w-[6%] mt-17 sm:mt-4 md:mt-0 flex justify-center h-full md:items-center md:justify-center">
                <p className="text-neutral-500 text-base font-medium">
                  {award.year}
                </p>
              </div>

              {/* Title + Description */}
              <div className="md:flex ml-7 md:flex-row-2 sm:gap-4">
                <div className="">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900">
                    {award.title}
                  </h4>
                </div>
                <p className="text-neutral-600 text-sm sm:text-base mt-2 md:mt-3 md:max-w-xl">
                  {award.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
