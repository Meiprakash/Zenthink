"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const services = [
  {
    title: "Industry Solutions",
    description:
      "We develop specialized software tailored to your sector's unique requirements and compliance needs. From healthcare platforms to fintech applications",
    icon: "/service-card-01.jpg",
  },
  {
    title: "Consulting & Strategy ",
    description:
      "We provide expert technology guidance that aligns IT investments with business objectives. Our expertise spans digital roadmaps, architecture design, and more.",
    icon: "/service-card-02.jpg",
  },
  {
    title: "Maintenance & Support",
    description:
      "We ensure continuous system performance that keeps your operations running smoothly and securely. Starting with proactive monitoring to rapid issue resolution.",
    icon: "/service-card-03.jpg",
  },
  {
    title: "AI & Automation ",
    description:
      "We implement smart automation solutions that eliminate repetitive tasks and unlock productivity. From workflow automation to machine learning and intelligent systems",
    icon: "/service-card-04.jpg",
  },
];

const ServiceSection: React.FC = () => {
    return (
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // animate only once, when 30% visible
        className="md:py-10 py-3 bg-white"
      >
        <section className="w-full bg-white py-10  mb-16 px-6 md:px-16  ">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <p className="text-md text-gray-900 mb-3 flex items-center gap-2">
              Service
              <span>
                <Image
                  src="/badge-icon.jpg"
                  alt="badge"
                  width={16}
                  height={16}
                />
              </span>
            </p>

            {/* Title + Description */}
            <div className="grid  sm:grid-cols-2 gap-10 mb-16">
              <h2 className="text-[20px] sm:text-3xl  md:text-5xl lg:text-[48px]  text-gray-900 leading-tight">
                We Engineer Solutions That Transform{" "}
                <br className="hidden md:block" />
                Businesses Into Leaders.
              </h2>
              <p className="text-gray-600 text-start text-[14px] md:text-[16px] sm:text-[15px] leading-relaxed md:ml-3">
                We help businesses scale through strategic software and digital
                innovation. From custom applications to enterprise platforms,
                our services are engineered to optimize your operations and
                drive competitive advantage.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 hover:border-transparent rounded-3xl p-5 sm:p-8 flex flex-col justify-between h-[206px]    duration-500 sm:h-[390px]
              ${
                index % 2 === 1
                  ? "md:translate-y-18" // lower 2nd and 4th
                  : "md:translate-y-0" // keep 1st and 3rd at top
              }`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl  md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 ">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-[12px]   leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-2 md:mt-8 lg:mt-8">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="opacity-90"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.section>
    );
};

export default ServiceSection;
