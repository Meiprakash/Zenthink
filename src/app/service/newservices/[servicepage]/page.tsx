"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Layers, 
  ArrowRight, 
  Activity, 
  TrendingUp, 
  FileCode,
  Settings,
  Database,
  Terminal,
  Server
} from "lucide-react";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

// Standardized Data for all Service Pages
const ServiceData = [
  {
    page: "Software Development",
    slug: "software-development",
    heroSection: {
      title: "Engineering Excellence: Custom Software Built for Scale",
      description:
        "In a digital-first economy, software isn't just a tool, it’s the engine of your business. Our software development services are designed to bridge the gap between complex business challenges and elegant technical solutions. We don’t just write code; we build scalable, secure, and future-proof digital ecosystems tailored to your specific operational needs. ",
    },
    lifecycle: {
      title: "Our Proven SDLC Framework",
      description:
        "We don't believe in 'black box' development. Our Agile-integrated Software Development Life Cycle is designed for total transparency, speed, and high quality keeping you in the driver’s seat from kick off to launch. Discovery & Requirement Analysis: We begin by 'living' in your problem space. We define the project scope, technical requirements, and business goals to ensure the roadmap aligns with your ROI.",
      steps: [
        {
          id: 1,
          title: "Architecture & Design",
          description:
            "Our architects create the blueprint. This includes UI/UX wireframing for user-centricity and system architecture design (database schemas, API integrations) to ensure the backend is rock-solid.",
        },
        {
          id: 2,
          title: "Iterative Development",
          description:
            "Using the Agile Scrum framework, we break the  project into 2-week sprints. You see progress in real-time, allowing for continuous refinement .",
        },
        {
          id: 3,
          title: " Quality Assurance (QA) & Testing",
          description:
            " We employ a test-early, test-often philosophy. This involves automated unit tests, manual functional testing, and security audits to squash bugs before they reach production. .",
        },
        {
          id: 4,
          title: " Deployment & DevOps",
          description:
            " We utilize CI/CD (Continuous  Integration/Continuous Deployment) pipelines to push code to production environments seamlessly, ensuring zero downtime.",
        },
        {
          id: 5,
          title: "Maintenance & Evolution",
          description: "CI/CD pipelines for zero-downtime launch.",
        },
        {
          id: 6,
          title: "Maintenance",
          description:
            " Post-launch, we monitor performance and provide updates to ensure the software evolves alongside your business and the latest security standards. ",
        },
      ],
    },
    pillars: [
      {
        id: "1.1",
        name: "Custom Software",
        link: "/service/newservices/software-development/custom-software-development",
        desc: "Tailor-made solutions designed for your unique workflows. No off-the-shelf limitations — just pure functionality built to give you a competitive edge.",
      },
      {
        id: "1.2",
        name: "Web Applications",
        link: "/service/newservices/software-development/web-application-development",
        desc: "High-performance, browser-based applications (SPAs and PWAs) that offer a desktop-like experience with the accessibility of the web.",
      },
      {
        id: "1.3",
        name: "Mobile Applications",
        link: "/service/newservices/software-development/mobile-app-development",
        desc: "Native and cross-platform (Flutter and React Native) mobile solutions that prioritize user engagement and sleek, intuitive interfaces.",
      },
      {
        id: "1.4",
        name: "SaaS & PaaS Solutions",
        link: "/service/newservices/software-development/saas-paas-development",
        desc: "Multi-tenant architectures and cloud-based platforms that scale effortlessly, enabling global software delivery.",
      },
      {
        id: "1.5",
        name: "Website Development",
        link: "/service/newservices/software-development/website-design-development",
        desc: "High-converting, SEO-optimized, and responsive websites that serve as your brand's digital headquarters.",
      },
      {
        id: "1.6",
        name: "Legacy Modernization",
        link: "/service/newservices/software-development/legacy-system-modernization",
        desc: "Modernizing aging systems by migrating to the cloud, refactoring code, and improving UI without disrupting operations.",
      },
    ],
    trust: [
      {
        title: "Security First",
        icon: ShieldCheck,
        desc: "GDPR and HIPAA-ready compliance.",
      },
      {
        title: "Scalability",
        icon: TrendingUp,
        desc: "Architecture that grows with your business.",
      },
      {
        title: "Transparency",
        icon: FileCode,
        desc: "Full code ownership and IP rights.",
      },
    ],
  },
  {
    page: "Database & Data Services",
    slug: "database-data-services",
    heroSection: {
      title: "The Backbone of Intelligence: Data Infrastructure",
      description:
        "In the era of Big Data and AI, your information is only as valuable as the infrastructure that supports it. We provide comprehensive Database & Data Services designed to ensure your data is secure, high-performing, and instantly accessible. From designing complex schemas to managing global cloud migrations, we turn raw data into a structured asset that powers growth.",
    },
    lifecycle: {
      title: "Our Data Strategy Lifecycle",
      description:
        "We don't just host data; we engineer environments where it can thrive. Our approach ensures that your data layer is the most resilient part of your tech stack.   ",
      steps: [
        {
          id: 1,
          title: "Requirement Mapping & Modeling",
          description:
            "We analyze your data consumption patterns to determine the ideal structure—SQL for transactional integrity or NoSQL for horizontal scale.",
        },
        {
          id: 2,
          title: "Infrastructure Design",
          description:
            "We build the blueprint for high availability. This includes setting up replication, clustering, and failover mechanisms to ensure 99.99% uptime.",
        },
        {
          id: 3,
          title: "Security & Encryption",
          description:
            "Data at rest and data in transit are protected using industry-standard encryption protocols, ensuring compliance with global data privacy laws.",
        },
        {
          id: 4,
          title: "Performance Tuning",
          description:
            "Through rigorous indexing, query optimization, and caching strategies, we eliminate latency and ensure your applications respond in milliseconds.",
        },
        {
          id: 5,
          title: "Continuous Monitoring",
          description:
            "Our automated systems track database health, identifying potential bottlenecks or storage limits before they impact your operations.",
        },
      ],
    },
    pillars: [
      {
        id: "2.1",
        name: "DBaaS",
        link: "/service/newservices/database-data-services/dbaas",
        desc: "Fully managed, cloud-hosted database environments that allow you to focus on application logic while we handle the maintenance.",
      },
      {
        id: "2.2",
        name: "Database Design & Optimization",
        link: "/service/newservices/database-data-services/database-design-optimization",
        desc: "Architecting new databases from scratch or refactoring existing ones to handle modern scale and speed requirements.",
      },
      {
        id: "2.3",
        name: "Data Migration",
        link: "/service/newservices/database-data-services/data-migration",
        desc: "Seamlessly moving your mission-critical data between platforms—on-premise to cloud or legacy to modern—with zero data loss.",
      },
      {
        id: "2.4",
        name: "Data Warehousing",
        link: "/service/newservices/database-data-services/data-warehousing",
        desc: "Consolidating disparate data sources into a single Source of Truth for advanced business intelligence and reporting.",
      },
    ],

    trust: [
      {
        title: "Zero-Downtime Migration",
        icon: Zap,
        desc: "We utilize phased cutovers to ensure your business stays online while we move your data.",
      },
      {
        title: "Security First",
        icon: ShieldCheck,
        desc: "Expertise in managing sensitive financial and healthcare data with full audit trails.",
      },
      {
        title: "Hybrid Cloud Expertise",
        icon: Globe,
        desc: " Whether it's AWS, Azure, or private cloud, we optimize for your specific environment. ",
      },
    ],
  },
  {
    page: "IT Support & Maintenance",
    slug: "it-support-maintenance",
    heroSection: {
      title:
        "Reliability Redefined: Proactive Care for Your Digital Infrastructure ",
      description:
        "Your technology should be an asset, not a source of downtime. Our IT Support & Maintenance services are designed to ensure your systems remain resilient, secure, and high-performing 24/7. We bridge the gap between technical glitches and business continuity. ",
    },
    lifecycle: {
      title: "Our Maintenance Ecosystem",
      description:
        "Bridging the gap between technical glitches and business continuity through structured support.",
      steps: [
        {
          id: 1,
          title: "Monitoring",
          description: "Real-time health tracking of servers and networks.",
        },
        {
          id: 2,
          title: "Tiered Response",
          description: "L1 > L2 > L3 escalation for speed and expertise.",
        },
        {
          id: 3,
          title: "Patching",
          description: "Preventative updates to squash vulnerabilities.",
        },
        {
          id: 4,
          title: "Auditing",
          description: "Monthly reports ensuring your stack scales correctly.",
        },
      ],
    },
    pillars: [
      {
        id: "3.1",
        name: "Helpdesk Support",
        link: "/service/newservices/it-support-maintenance/it-helpdesk-support",
        desc: "Structured technical assistance categorized by complexity and delivery time..",
      },
      {
        id: "3.2",
        name: " Annual Maintenance Contracts (AMC)",
        link: "/service/newservices/it-support-maintenance/annual-maintenance-contracts",
        desc: "Comprehensive, fixed-cost agreements for total infrastructure peace of mind.",
      },
      {
        id: "3.3",
        name: "Remote/Onsite Support",
        link: "/service/newservices/it-support-maintenance/remote-onsite-support",
        desc: "Immediate digital troubleshooting combined with physical intervention. ",
      },
    ],
    trust: [
      {
        title: "24/7 Resilience",
        icon: ShieldCheck,
        desc: "Constant vigilance ensuring zero disruption.",
      },
      {
        title: "Expert Tiers",
        icon: Layers,
        desc: "Direct access to specialized L3 engineers.",
      },
      {
        title: "Proactive Fixes",
        icon: Activity,
        desc: "Solving problems before users notice.",
      },
    ],
  },
  {
    page: "DevOps & Automation",
    slug: "devops-automation",
    heroSection: {
      title:
        "Velocity Without Vulnerability: Accelerating  Your Innovation Cycle",
      description:
        "In the modern software landscape, speed is everything—but speed without stability is a risk. Our DevOps & Automation services bridge the gap between development and operations. By automating the boring parts of software delivery, we allow your engineers to focus on code while our systems handle the testing, scaling, and deployment with surgical precision. ",
    },
    lifecycle: {
      title: "Our DevOps Transformation",
      description:
        "We don't just install tools; we build automated cultures that eliminate human error and shorten time- to - market.",
      steps: [
        {
          id: 1,
          title: "Environment Standardization",
          description:
            'We ensure "it works on my machine" translates to "it works in production" by using containerization.',
        },
        {
          id: 2,
          title: "Automated Testing Integration",
          description:
            "Every code change is automatically vetted through unit, integration, and security tests.",
        },
        {
          id: 3,
          title: "Continuous Orchestration",
          description:
            "We manage the complex lifecycle of containers to ensure high availability and auto-scaling.",
        },
        {
          id: 4,
          title: "Immutable Infrastructure",
          description:
            "We treat servers like software—deploying them through code rather than manual configuration.",
        },
        {
          id: 5,
          title: "Proactive Observability",
          description:
            "Real-time monitoring and automated alerts that find and fix issues before your users notice.",
        },
      ],
    },
    pillars: [
      {
        id: "4.1",
        name: "CI/CD Pipeline",
        link: "/service/newservices/devops-automation/cicd-pipeline",
        desc: "Bridging the gap between code and customer with automated delivery.",
      },
      {
        id: "4.2",
        name: "Infrastructure as Code",
        link: "/service/newservices/devops-automation/infrastructure-as-code",

        desc: "Version-controlled, reproducible environments built with code.",
      },
      {
        id: "4.3",
        name: "Docker & Kubernetes",
        link: "/service/newservices/devops-automation/docker-kubernetes",
        desc: "Microservices orchestration for enterprise-level scaling.",
      },
      {
        id: "4.4",
        name: "Release Management",
        link: "/service/newservices/devops-automation/release-deployment-management",
        desc: "Strategic control over how and when your software reaches the world.",
      },
    ],

    trust: [
      {
        title: "Zero Error",
        icon: Zap,
        desc: "100% automation of configuration risks.",
      },
      {
        title: "Fast Delivery",
        icon: TrendingUp,
        desc: "Reduce time-to-market to minutes.",
      },
      {
        title: "Observed Systems",
        icon: Activity,
        desc: "Full transparency into system health.",
      },
    ],
  },
];

export default function DynamicServicePage() {
  const params = useParams();
  const slug = params.servicepage;
  const data = ServiceData.find((s) => s.slug === slug);

  if (!data) return <div className="h-screen flex items-center justify-center ">SERVICE_NOT_FOUND_404</div>;

  return (
    <div className="bg-white text-black  selection:bg-black selection:text-white">
      <Navbar />

      {/* --- HERO --- */}
      <section className="max-w-7xl mx-auto px-6 mt-30 mb-5 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-12 gap-7 "
        >
          <div className="lg:col-span-6 ">
            <h1 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.2] md:leading-[1.1]  text-black ">
              {data.heroSection.title}
            </h1>
          </div>
          <div className="lg:col-span-6 sm:ml-20  sm:mt-6   ">
            <p className="text-neutral-600 mt-1 xs:mt-1 sm:mt-1 text-[14px] sm:text-[17px] max-w-2xl">
              {data.heroSection.description}
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- LIFECYCLE --- */}
      {/* --- LIFECYCLE --- */}
      <section className="bg-neutral-50 py-32 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-tighter mb-6">
            {data.lifecycle.title}
          </h2>
          <p className="text-neutral-500 text-[14px] sm:text-[17px] font-light max-w-6xl mx-auto mb-20">
            {data.lifecycle.description}
          </p>

          {/* By adding the <div> or 'null', the 'Expression Expected' error disappears */}
          {data.slug === "software-development" && <div></div>}

          {data.slug === "database-data-services" && <div></div>}

          {data.slug === "it-support-maintenance" && <div></div>}

          {data.slug === "devops-automation" && <div></div>}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 text-left">
            {data.lifecycle.steps.map((step) => (
              <div
                key={step.id}
                className="bg-white p-12 rounded-[3rem] border border-neutral-100 shadow-sm hover:border-lime-500 hover:text-lime-500 transition-all"
              >
                <span className="text-5xl text-neutral-500 font-thin    mb-8 block">
                  0{step.id}
                </span>
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-mediumd  mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed hover:text-neutral-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PILLARS --- */}
      <section className="max-w-7xl mx-auto px-6 py-2">
        <h2 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium  tracking-tighter mb-16 flex items-center gap-6">
          Core Service Pillars
          <div className="h-[1px] flex-1 bg-neutral-100" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="group border border-neutral-100 rounded-[3rem] p-12 hover:bg-black transition-all duration-700"
              >
          <Link href={pillar.link}>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-800">
                    <Settings
                      className="text-black group-hover:text-white"
                      size={24}
                    />
                  </div>
                  {/* <span className="text-[10px] font-mono text-neutral-300 group-hover:text-neutral-700">
                  ID_{pillar.id}
                </span> */}
                </div>
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-mediumd mb-6  tracking-tighter group-hover:text-white">
                  {pillar.name}
                </h3>
                <p className="text-[12px] md:text-[14px] text-neutral-500 group-hover:text-neutral-400 font-light max-w-sm">
                  {pillar.desc}
                </p>
                <div className="mt-12 overflow-hidden">
                  <button className="flex items-center gap-3 text-[14px] text-neutral-700  tracking-widest group-hover:text-white transition-all transform group-hover:translate-x-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
          </Link>
              </div>
            ))}
        </div>
      </section>

      {/* --- PARTNERSHIP --- */}
      <section className="bg-white text-black py-32 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-bold   tracking-tighter leading-none mb-10">
                {data.trust === undefined
                  ? "Partner With Us"
                  : "Why Partner With Us"}
              </h2>
              <div className="w-90 h-1 bg-black" />
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {data.trust.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-neutral-800">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold ">{item.title}</h4>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}