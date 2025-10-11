"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const services = [
  {
    title: "UI/UX",
    description:
      "We create stunning visual designs that elevate your brand and captivate your audience. From web interfaces.",
    icon: "/service-card-01.jpg",
  },
  {
    title: "Web Dev",
    description:
      "We develop captivating visual designs that enhance your brand and engage your audience. Our expertise spans.",
    icon: "/service-card-02.jpg",
  },
  {
    title: "Branding",
    description:
      "We craft eye-catching branding solutions that enhance your identity and engage your audience. Starting with web.",
    icon: "/service-card-03.jpg",
  },
  {
    title: "Motion",
    description:
      "We craft dynamic visual designs that enhance your brand and engage your audience. From animated web interfaces.",
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
        className="py-24 bg-white"
      >
        <section className="w-full bg-gray-50 py-35 px-6 md:px-16 pt-15 ">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <p className="text-md text-gray-500 mb-3 flex items-center gap-2">
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
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <h2 className="text-3xl md:text-5xl  text-gray-900 leading-tight">
                We Craft Services That <br className="hidden md:block" />
                Turn Brands Into Icons
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                We help brands grow through strategic design and digital
                experiences. From brand identity to powerful websites, our
                services are crafted to elevate your business and leave a
                lasting impression.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between  shadow-xl hover:shadow-2xl transition-all duration-300 h-[360px]
              ${
                index % 2 === 1
                  ? "translate-y-18" // lower 2nd and 4th
                  : "translate-y-0" // keep 1st and 3rd at top
              }`}
                >
                  <div>
                    <h3 className="text-4xl  text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-md leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8">
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
