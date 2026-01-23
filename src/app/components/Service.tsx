"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// Importing specific icons to differentiate the cards
import {
  Code2,
  Database,
  Headset,
  Terminal,
  Layout,
  Smartphone,
  Settings,
  ShieldCheck,
  Server,
  Cpu,
} from "lucide-react";

const services = [
  {
    title: "Software Development Services",
    description: [
      {
        text: "Custom software development",
        icon: <Code2 size={16} className="text-lime-500" />,
      },
      {
        text: "Web application development",
        icon: <Layout size={16} className="text-lime-500" />,
      },
      {
        text: "Mobile app development (Android / iOS)",
        icon: <Smartphone size={16} className="text-lime-500" />,
      },
      {
        text: "SaaS & PaaS development",
        icon: <Server size={16} className="text-lime-500" />,
      },
      {
        text: "Website design & development",
        icon: <Layout size={16} className="text-lime-500" />,
      },
      {
        text: "Legacy system modernization",
        icon: <Settings size={16} className="text-lime-500" />,
      },
    ],
    icon: "/service-card-01.jpg",
  },
  {
    title: "Database & Data Services",
    description: [
      {
        text: "Database as a Service (DBaaS)",
        icon: <Database size={16} className="text-lime-500" />,
      },
      {
        text: "Database design & optimization",
        icon: <Cpu size={16} className="text-lime-500" />,
      },
      {
        text: "Data migration",
        icon: <Settings size={16} className="text-lime-500" />,
      },
      {
        text: "Data warehousing",
        icon: <Server size={16} className="text-lime-500" />,
      },
    ],
    icon: "/service-card-03.jpg",
  },
  {
    title: "IT Support & Maintenance",
    description: [
      {
        text: "IT helpdesk support (L1/L2/L3)",
        icon: <Headset size={16} className="text-lime-500" />,
      },
      {
        text: "Remote & onsite support",
        icon: <Settings size={16} className="text-lime-500" />,
      },
      {
        text: "Annual Maintenance Contracts (AMC)",
        icon: <ShieldCheck size={16} className="text-lime-500" />,
      },
    ],
    icon: "/service-card-02.jpg",
  },
  {
    title: "DevOps & Automation",
    description: [
      {
        text: "CI/CD pipeline implementation",
        icon: <Terminal size={16} className="text-lime-500" />,
      },
      {
        text: "Infrastructure as Code (IaC)",
        icon: <Code2 size={16} className="text-lime-500" />,
      },
      {
        text: "Docker & Kubernetes services",
        icon: <Server size={16} className="text-lime-500" />,
      },
      {
        text: "Monitoring & logging solutions",
        icon: <Settings size={16} className="text-lime-500" />,
      },
      {
        text: "Release & deployment management",
        icon: <ShieldCheck size={16} className="text-lime-500" />,
      },
    ],
    icon: "/service-card-04.jpg",
  },
];

const ServiceSection: React.FC = () => {
  const router = useRouter();
 
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="md:py-10 py-3"
    >
      <section className="w-full py-10 md:mb-16 px-6 md:px-16">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8">
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
                    h-auto min-h-[300px] sm:h-[350px]
                    ${
                      index % 2 === 1
                        ? "md:translate-y-18 lg:translate-y-0"
                        : "md:translate-y-0"
                    }
                  `}
                  onClick={() => router.push("/service#service-card")}
                >
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-neutral-900 mb-4">
                      {service.title}
                    </h3>

                    <ul className="text-neutral-600 text-[12px] md:text-[14px] leading-snug space-y-3">
                      {service.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-green-600 mt-0.5 flex-shrink-0">
                            {item.icon}
                          </span>
                          <span>{item.text}</span>
                        </li>
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