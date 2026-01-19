"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Software Development Services ",
    description: [
      "1) Custom software development",
      "2) Web application development",
      "3) Mobile app development (Android / iOS / Flutter)",
      "4) SaaS & PaaS development",
      "5) Website design & development ",
      "6) Legacy system modernization",
    ],
    icon: "/service-card-01.jpg",
  },
  // {
  //   title: "Cloud & Infrastructure Services (Check feasibility)  ",
  //   description: [
  //     " a)  Cloud solutions (AWS, Azure, GCP) ",
  //     "b) Cloud migration & modernization ",
  //     "c) Cloud hosting & management ",
  //     "d) Hybrid & multi-cloud setup",
  //     "e)  Infrastructure monitoring & optimization",
  //   ],
  //   icon: "/service-card-02.jpg",
  // },
  {
    title: "Database & Data Services",
    description: [
      " 1) Database as a Service (DBaaS)  ",
      "2)Database design & optimization ",
      "3)  Data migration  ",
      "4)Data warehousing",
    ],
    icon: "/service-card-03.jpg",
  },
  {
    title: "IT Support & Maintenance  ",
    description: [
      " 1)IT helpdesk support (L1/L2/L3)   ",
      "2) Remote & onsite support  ",
      "3)  Annual Maintenance Contracts (AMC)",
    ],
    icon: "/service-card-02.jpg",
  },
  {
    title: " DevOps & Automation   ",
    description: [
      " 1)CI/CD pipeline implementation    ",
      "2) Infrastructure as Code (IaC)   ",
      "3) Docker & Kubernetes services",
      "4) Monitoring & logging solutions ",
      "5) Release & deployment management",
    ],
    icon: "/service-card-04.jpg",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="md:py-10 py-3 "
    >
      <section className="w-full  py-10  md:mb-16 px-6 md:px-16  ">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <p className="text-md text-neutral-900 mb-3 flex items-center gap-2">
            Service
            <span>
              <Image src="/badge-icon.jpg" alt="badge" width={16} height={16} />
            </span>
          </p>

          {/* Title + Description */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-10 mb-10 md:mb-16">
            <h2 className="text-[30px] sm:text-2xl md:text-4xl lg:text-[44px] font-medium text-neutral-900 leading-tight tracking-tight">
              Your Solution, <br className="hidden md:block" />
              Built by Us
            </h2>
            <p className="text-neutral-600 text-[14px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3">
              We help businesses scale through strategic software and digital
              innovation. From custom applications to enterprise platforms, our
              services are engineered to optimize your operations and drive
              competitive advantage.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* {services.map((service, index) => (
              <div
                key={index}
                className={`bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)  border border-neutral-200 hover:shadow-xl rounded-3xl p-5 sm:p-8 flex flex-col justify-between h-[260px] duration-500 sm:h-[390px]
              ${
                index % 2 === 1
                  ? "md:translate-y-18" // lower 2nd and 4th
                  : "md:translate-y-0" // keep 1st and 3rd at top
              }`}
              >
                <div>
                  <h3 className="text-xl sm:text-xl  md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3 ">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-[14px]   leading-relaxed">
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
            ))} */}
            {services.map((service, index) => {
              const isFirstRow = index < 3;

              return (
                <div
                  key={index}
                  className={`
        border border-neutral-200 hover:shadow-xl
        rounded-3xl p-4 sm:p-7
        flex flex-col justify-between
        duration-500
        h-[260px] sm:h-[390px]
${
  index % 2 === 1
    ? "md:translate-y-18 lg:translate-y-0" // lower 2nd and 4th
    : "md:translate-y-0" // keep 1st and 3rd at top
}
        lg:col-span-${isFirstRow ? "2" : "2"}
      `}
                >
                  <div>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3">
                      {service.title}
                    </h3>

                    <ul className="text-neutral-600 text-[11px] md:text-[14px]  leading-relaxed space-y-1">
                      {service.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="opacity-90"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default ServiceSection;
