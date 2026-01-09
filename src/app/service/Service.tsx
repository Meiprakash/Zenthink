// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Software Development Services ",
//     description: [
//       " a) Custom software development",
//       "b) Web application development",
//       "c) Mobile app development (Android / iOS / Flutter)",
//       "d) SaaS & PaaS development",
//       "e) Website design & development ",
//       "f) Legacy system modernization",
//     ],
//     icon: "/service-card-01.jpg",
//   },
//   {
//     title: "Cloud & Infrastructure Services (Check feasibility)  ",
//     description: [
//       " a)  Cloud solutions (AWS, Azure, GCP) ",
//       "b) Cloud migration & modernization ",
//       "c) Cloud hosting & management ",
//       "d) Hybrid & multi-cloud setup",
//       "e)  Infrastructure monitoring & optimization",
//     ],
//     icon: "/service-card-02.jpg",
//   },
//   {
//     title: "Database & Data Services",
//     description: [
//       " a) Database as a Service (DBaaS)  ",
//       "b)Database design & optimization ",
//       "c)  Data migration  ",
//       "d)Data warehousing",
//     ],
//     icon: "/service-card-03.jpg",
//   },
//   {
//     title: "IT Support & Maintenance  ",
//     description: [
//       " a)IT helpdesk support (L1/L2/L3)   ",
//       "b) Remote & onsite support  ",
//       "c)  Annual Maintenance Contracts (AMC)",
//     ],
//     icon: "/service-card-04.jpg",
//   },
//   {
//     title: " DevOps & Automation   ",
//     description: [
//       " a)CI/CD pipeline implementation    ",
//       "b) Infrastructure as Code (IaC)   ",
//       "c) Docker & Kubernetes services",
//       "d) Monitoring & logging solutions ",
//       "e) Release & deployment management",
//     ],
//     icon: "/service-card-04.jpg",
//   },
// ];

// const ServiceItems: React.FC = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.3 }}
//       className="md:py-10 py-3 "
//     >
//       <section className="w-full  py-10  md:mb-16 px-6 md:px-16  ">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <p className="text-md text-neutral-900 mb-3 flex items-center gap-2">
//             Service
//             <span>
//               <Image src="/badge-icon.jpg" alt="badge" width={16} height={16} />
//             </span>
//           </p>

//           {/* Title + Description */}
//           <div className="grid sm:grid-cols-2 gap-5 md:gap-10 mb-10 md:mb-16">
//             <h2 className="text-[30px] sm:text-2xl md:text-4xl lg:text-[44px] font-medium text-neutral-900 leading-tight tracking-tight">
//               We Engineer Solutions That Transform{" "}
//               <br className="hidden md:block" />
//               Businesses Into Leaders.
//             </h2>
//             <p className="text-neutral-600 text-[14px] md:text-[16px] sm:text-[15px] md:text-start leading-relaxed md:mt-3">
//               We help businesses scale through strategic software and digital
//               innovation. From custom applications to enterprise platforms, our
//               services are engineered to optimize your operations and drive
//               competitive advantage.
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-8">
//             {/* {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)  border border-neutral-200 hover:shadow-xl rounded-3xl p-5 sm:p-8 flex flex-col justify-between h-[260px] duration-500 sm:h-[390px]
//               ${
//                 index % 2 === 1
//                   ? "md:translate-y-18" // lower 2nd and 4th
//                   : "md:translate-y-0" // keep 1st and 3rd at top
//               }`}
//               >
//                 <div>
//                   <h3 className="text-xl sm:text-xl  md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3 ">
//                     {service.title}
//                   </h3>
//                   <p className="text-neutral-600 text-[14px]   leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>

//                 <div className="mt-3 sm:mt-2 md:mt-8 lg:mt-8">
//                   <Image
//                     src={service.icon}
//                     alt={service.title}
//                     width={40}
//                     height={40}
//                     className="opacity-90"
//                   />
//                 </div>
//               </div>
//             ))} */}
//             {services.map((service, index) => {
//               const isFirstRow = index < 3;

//               return (
//                 <div
//                   key={index}
//                   className={`
//         bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)]
//         border border-neutral-200 hover:shadow-xl
//         rounded-3xl p-4 sm:p-7
//         flex flex-col justify-between
//         duration-500
//         h-[260px] sm:h-[390px]
// ${
//   index % 2 === 1
//     ? "md:translate-y-18 lg:translate-y-0" // lower 2nd and 4th
//     : "md:translate-y-0" // keep 1st and 3rd at top
// }
//         lg:col-span-${isFirstRow ? "2" : "3"}
//       `}
//                 >
//                   <div>
//                     <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3">
//                       {service.title}
//                     </h3>

//                     <ul className="text-neutral-600 text-[11px] md:text-[14px]  leading-relaxed space-y-1">
//                       {service.description.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mt-6">
//                     <Image
//                       src={service.icon}
//                       alt={service.title}
//                       width={40}
//                       height={40}
//                       className="opacity-90"
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </motion.section>
//   );
// };

// export default ServiceItems;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Software Development Services",
    shortDesc:
      "Custom software, web, and mobile solutions tailored to your business.",
    icon: "/service-card-01.jpg",
    fullContent: {
      intro:
        "Custom solutions to power your business through innovative software, web, and mobile applications.",
      points: [
        "Custom software development – Tailored software built to meet your unique business needs.",
        "Web application & Website development – Scalable, secure, high-performance web apps.",
        "Mobile app development (Android / iOS / Flutter) – Engaging mobile experiences.",
        "SaaS & PaaS development – Cloud-based platforms designed for flexibility and scalability.",
        "Legacy system modernization – Transform outdated systems into future-ready solutions.",
      ],
    },
  },
  {
    title: "Cloud & Infrastructure Services",
    shortDesc:
      "Secure, scalable cloud solutions to drive agility and performance.",
    icon: "/service-card-02.jpg",
    fullContent: {
      intro:
        "Optimizing your cloud and IT infrastructure to drive agility, security, and performance.",
      points: [
        "Cloud solutions (AWS, Azure, GCP)",
        "Cloud migration & modernization",
        "Cloud hosting & management",
        "Hybrid & multi-cloud setup",
        "Infrastructure monitoring & optimization",
      ],
    },
  },
  {
    title: "Database & Data Services",
    shortDesc:
      "Structured, secure data solutions ready for analytics and growth.",
    icon: "/service-card-03.jpg",
    fullContent: {
      intro:
        "Ensuring your data is structured, secure, and always ready for business intelligence.",
      points: [
        "Database as a Service (DBaaS)",
        "Database design & optimization",
        "Data migration",
        "Data warehousing",
      ],
    },
  },
  {
    title: "IT Support & Maintenance",
    shortDesc: "Reliable IT systems with proactive monitoring and support.",
    icon: "/service-card-04.jpg",
    fullContent: {
      intro:
        "Keeping your IT systems reliable, secure, and running smoothly at all times.",
      points: [
        "IT helpdesk support (L1 / L2 / L3)",
        "Remote & onsite support",
        "Annual Maintenance Contracts (AMC)",
      ],
    },
  },
  {
    title: "DevOps & Automation",
    shortDesc: "Accelerate delivery with automation and CI/CD pipelines.",
    icon: "/service-card-04.jpg",
    fullContent: {
      intro:
        "Accelerating software delivery while ensuring reliability, scalability, and efficiency.",
      points: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Docker & Kubernetes services",
        "Monitoring & logging solutions",
        "Release & deployment management",
      ],
    },
  },
];

const ServiceItems = () => {
  const [activeService, setActiveService] = useState<any>(null);

  return (
    <section className="py-10 md:py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <p className="text-md text-neutral-900 mb-3 flex items-center gap-2">
          Service
          <Image src="/badge-icon.jpg" alt="badge" width={16} height={16} />
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <h2 className="text-[30px] sm:text-2xl md:text-4xl lg:text-[44px] font-medium leading-tight">
            We Engineer Solutions That Transform Businesses
          </h2>
          <p className="text-neutral-600 text-[14px] md:text-[16px] leading-relaxed">
            We help businesses scale through strategic software and digital
            innovation, delivering secure and future-ready solutions.
          </p>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const isFirstRow = index < 3;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`
                  group  bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)]
                  border border-neutral-200 rounded-3xl p-5 sm:p-7
                  flex flex-col justify-between
                  h-[280px] sm:h-[380px]
                  transition-all
                  lg:col-span-${isFirstRow ? "2" : "3"}
                `}
              >
                <div className="">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {service.shortDesc}
                  </p>
                  <div className="mt-6 flex justify-start">
                    <span
                      onClick={() => setActiveService(service)}
                      className="text-black cursor-pointer py-1 p-2 rounded-2xl w-fit flex gap-1 transform transition-all duration-500 ease-in-out group-hover:gap-3 group-hover:text-lime-500"
                    >
                      Read more
                      <Image
                        src="/arrow2.png"
                        alt="arrow"
                        width={15}
                        height={4}
                        className="mt-1.5 w-4 h-3.5"
                      />
                    </span>
                  </div>
                </div>

                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="opacity-90"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===== DETAIL OVERLAY (JioHotstar style) ===== */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 relative"
            >
              {/* CLOSE */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-black text-lg"
              >
                ✕
              </button>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-3">
                {activeService.title}
              </h3>

              {/* INTRO */}
              <p className="text-neutral-600 mb-4">
                {activeService.fullContent.intro}
              </p>

              {/* POINTS */}
              <ul className="space-y-2 text-sm text-neutral-700">
                {activeService.fullContent.points.map(
                  (point: string, i: number) => (
                    <li key={i}>• {point}</li>
                  )
                )}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceItems;
