"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  {
    id: 1,
    year: "2025",
    title: "Enterprise Solutions Scalable Systems for Complex Operations",
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
    <section className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-neutral-900 text-base sm:text-lg md:text-xl font-medium"
        >
          Awards
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Image
            src="/badge.jpg"
            alt="badge"
            width={20}
            height={20}
            className="w-4 h-4"
          />
        </motion.div>
      </div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-8 sm:mb-10 md:mb-12 lg:mb-14"
      >
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 items-start">
          {/* Left: Heading */}
          <div>
            <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
              Expertise That Transforms Challenges Into Competitive Advantages
            </h2>
          </div>

          {/* Right: Description */}
          <div>
            <p className="text-neutral-600 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              We help organizations scale through intelligent software and
              proven methodologies. From system modernization to new product
              development, our capabilities drive innovation and sustainable
              growth
            </p>
          </div>
        </div>
      </motion.div>

      {/* Awards List */}
      <div className="flex flex-col gap-5 sm:gap-10">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 py-6 sm:py-8 md:py-10 last:border-b-0"
          >
            {/* Image */}
            <div className="flex justify-center md:justify-start md:w-1/3 lg:w-1/4">
              <Image
                src={award.image}
                alt={award.title}
                width={200}
                height={200}
                className="rounded-lg w-full max-w-[280px] sm:max-w-[320px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] object-cover shadow-sm"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 180px"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 xs:gap-5 sm:gap-6 md:gap-8 w-full px-2 md:px-0">
              {/* Year */}
              <div className="md:w-[60px] lg:w-[80px] xl:w-[100px] flex-shrink-0">
                <p className="text-neutral-600 text-[14px] sm:text-lg md:text-xl font-medium">
                  {award.year}
                </p>
              </div>

              {/* Title + Description */}
              <div className="flex-1">
                <h4 className="text-[20px] sm:text-2xl md:text-2xl lg:text-3xl font-medium text-neutral-900 leading-tight">
                  {award.title}
                </h4>
                <p className="text-neutral-600 text-[14px] sm:text-lg mt-2 xs:mt-3 leading-relaxed">
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