"use client";

import React, { useState , useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Software Development Services",
    shortDesc:
      "Custom software, web, and mobile solutions tailored to your business.",
    icon: "/service-card-01.jpg",
    link: "/service/details/software-development",
    fullContent: {
      intro:
        "Custom solutions to power your business through innovative software, web, and mobile applications.",
      points: [
        {
          name: "Custom software development ",
          link: "/service/details/software-development/custom-software-development",
        },
        {
          name: "Web application & Website development",
          link: "/service/details/software-development/web-application-development",
        },
        {
          name: "Mobile App Development",
          link: "/service/details/software-development/mobile-app-development",
        },
        {
          name: "SaaS & PaaS Development",
          link: "/service/details/software-development/saas-paas-development",
        },
        {
          name: "Website Design & Development",
          link: "/service/details/software-development/website-design-development",
        },
        {
          name: "Legacy system modernization",
          link: "/service/details/software-development/legacy-system-modernization",
        },
      ],
    },
  },
  // {
  //   title: "Cloud & Infrastructure Services",
  //   shortDesc:
  //     "Secure, scalable cloud solutions to drive agility and performance.",
  //   icon: "/service-card-02.jpg",
  //   link: "/service/details/database-data-",
  //   fullContent: {
  //     intro:
  //       "Optimizing your cloud and IT infrastructure to drive agility, security, and performance.",
  //     points: [
  //       "Cloud solutions (AWS, Azure, GCP)",
  //       "Cloud migration & modernization",
  //       "Cloud hosting & management",
  //       "Hybrid & multi-cloud setup",
  //       "Infrastructure monitoring & optimization",
  //     ],
  //   },
  // },
  {
    title: "Database & Data Services",
    shortDesc:
      "Structured, secure data solutions ready for analytics and growth.",
    icon: "/service-card-03.jpg",
    link: "/service/details/database-data-services",
    fullContent: {
      intro:
        "Ensuring your data is structured, secure, and always ready for business intelligence.",
      points: [
        {
          name: "Database as a Service ",
          link: "/service/details/database-data-services/dbaas",
        },
        {
          name: "Database design & optimization",
          link: "/service/details/database-data-services/database-design-optimization",
        },
        {
          name: "Data migration",
          link: "/service/details/database-data-services/data-migration",
        },
        {
          name: "Data warehousing",
          link: "/service/details/database-data-services/data-warehousing",
        },
      ],
    },
  },
  {
    title: "IT Support & Maintenance",
    shortDesc: "Reliable IT systems with proactive monitoring and support.",
    icon: "/service-card-04.jpg",
    link: "/service/details/it-support-maintenance",
    fullContent: {
      intro:
        "Keeping your IT systems reliable, secure, and running smoothly at all times.",
      points: [
        {
          name: "IT helpdesk support (L1 / L2 / L3)",
          link: "/service/details/it-support-maintenance/it-helpdesk-support",
        },
        {
          name: " Remote & Onsite Support ",
          link: "/service/details/it-support-maintenance/remote-onsite-support",
        },
        {
          name: "Annual Maintenance Contracts (AMC)",
          link: "/service/details/it-support-maintenance/annual-maintenance-contracts",
        },
      ],
    },
  },
  {
    title: "DevOps & Automation",
    shortDesc: "Accelerate delivery with automation and CI/CD pipelines.",
    icon: "/service-card-02.jpg",
    link: "/service/details/devops-automation",
    fullContent: {
      intro:
        "Accelerating software delivery while ensuring reliability, scalability, and efficiency.",
      points: [
        {
          name: "CI/CD pipeline implementation",
          link: "/service/details/devops-automation/cicd-pipeline",
        },
        {
          name: "Infrastructure as Code (IaC)",
          link: "/service/details/devops-automation/infrastructure-as-code",
        },
        {
          name: "Docker & Kubernetes services",
          link: "/service/details/devops-automation/docker-kubernetes",
        },
        {
          name: "Monitoring & logging solutions",
          link: "/service/details/devops-automation/monitoring-logging-solutions",
        },
        {
          name: "Release & deployment management",
          link: "/service/details/devops-automation/release-deployment-management",
        },
      ],
    },
  },
];


const ServiceItems = () => {
  const [activeService, setActiveService] = useState<any>(null);
  const ServicePage = () => {
    useEffect(() => {
      const hash = window.location.hash;

      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    }, []);
  }

  return (
    <section className="py-10 md:py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto" id="service-card">
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

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isFirstRow = index < 3;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`
                  group
                  border border-neutral-200 rounded-3xl p-5 sm:p-7
                  flex flex-col justify-between
                  h-[280px] sm:h-[215px]
                  transition-all
                  lg:col-span-2
                `}
              >
                <span
                  className="cursor-pointer"
                  key={index}
                  onClick={() => setActiveService(service)}
                >
                  <div className="">
                    <h3 className="text-lg md:text-2xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="flex gap-90 mt-13 ">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="opacity-90"
                    />
                    <span
                      // onClick={() => setActiveService(service)}
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
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/*  DETAIL OVERLAY  */}
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
              <ul className=" space-y-2 text-sm text-neutral-700">
                {activeService.fullContent.points.map(
                  (point: any, i: number) => (
                    <li
                      className="flex gap-2 hover:text-lime-500 transition"
                      key={i}
                    >
                      <Image
                        src="/link.png"
                        alt="link"
                        width={7}
                        height={100}
                        className="opacity-90 w-3 h-3 mt-2 hover:text-lime-500"
                      />
                      <Link
                        href={point.link}
                        className="hover:ml-2 transition  flex gap-2 p-1"
                        onClick={() => setActiveService(null)}
                      >
                        {point.name}
                        <Image
                          src="/right.png"
                          alt="link"
                          width={7}
                          height={100}
                          className=" text-black w-3 h-3 mt-1 "
                        />
                      </Link>
                    </li>
                  ),
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

