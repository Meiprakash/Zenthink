"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar/Navbar";
import { useRef } from "react";
import TestimonialsSection from "@/app/components/Testimonials";
import FAQ from "@/app/components/FaqSection";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

/* ----------------------------- TYPES ----------------------------- */

interface Stat {
  value: string;
  label: string;
}
interface Product {
  name: string;
  price: string;
  image: string;
}
interface TopProduct {
  title: string;
  desc: string;
  price: string;
  image: string;
  features: string[];
}
interface WhyItem {
  name: string;
  desc: string;
}
interface IndustryCard {
  title: string;
  description: string;
  cta?: string;
}
interface WhatWeBuildItem {
  title: string;
  description: string;
}
interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
interface BenefitCard {
  title: string;
  description: string;
}
interface DevelopmentApproach {
  title: string;
  bestFor?: string;
  advantages?: string[];
}

interface Industry {
  title: string;
  slug: string;
  desc: string;
  banner: string;
  stats: Stat[];
  whyChoose: WhyItem[];
  topProducts: TopProduct[];
  products: Product[];
  industriesWeServe?: {
    heading: string;
    description: string;
    cards: IndustryCard[];
  };
  whatWeBuild?: {
    heading: string;
    description: string;
    items: WhatWeBuildItem[];
  };
  developmentProcess?: {
    heading: string;
    description: string;
    steps: ProcessStep[];
  };
  benefits?: {
    heading: string;
    description: string;
    cards: BenefitCard[];
    developmentApproaches?: DevelopmentApproach[];
  };
}

/* ----------------------------- DATA ----------------------------- */

const industriesData: Industry[] = [
  {
    title: "Web Application Development That Powers Modern Business",
    slug: "web-application",
    desc: "Transforming Operations with Scalable, Secure Web Platforms",
    banner: "/04b7045b-e8d9-4e8d-8800-ac80752745aa.png",
    stats: [
      { value: "500M+", label: "Transactions Processed" },
      { value: "100K+", label: "Active Users Daily" },
      { value: "50+", label: "Enterprises Powered" },
    ],
    whyChoose: [
      {
        name: "Responsive & Scalable",
        desc: "Built with modern frameworks and cloud infrastructure for seamless performance across all devices and growing traffic volumes.",
      },
      {
        name: "User-Centric Design",
        desc: "Intuitive interfaces that enhance user experience and boost productivity through thoughtful UX/UI design and accessibility standards.",
      },
      {
        name: "Secure & Compliant",
        desc: "Enterprise-grade security with data encryption, regular audits, and industry compliance protecting your sensitive business information.",
      },
      {
        name: "Fast Integration",
        desc: "Seamless connectivity with existing CRMs, ERPs, payment gateways, and third-party tools through robust API architecture.",
      },
    ],
    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "₹1599",
        image: "/ai-in-robotics-surgery23.jpg",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: " ₹1899",
        image: "/cover-14.webp",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],
    products: [
      {
        name: "Patient Analytics App",
        price: "₹499",
        image: "/revmaxx-Product.svg",
      },
      {
        name: "AI Medical Bot",
        price: "₹799",
        image: "/ai-doctor-bot-stethoscope-medical-600nw-2671534203.webp",
      },
      {
        name: "Hospital BI Dashboard",
        price: "₹1299",
        image: "/Hospital-Industry.png",
      },
    ],
    industriesWeServe: {
      heading: "Empowering Businesses Across Key Industries",
      description:
        "We deliver specialized web solutions tailored to the unique challenges and opportunities of your sector.",
      cards: [
        {
          title: "Retail & E-Commerce",
          description:
            "From online storefronts to complex marketplaces, we build web platforms that drive sales, manage inventory, and create seamless shopping experiences across all channels.",
          cta: "Explore Retail Solutions →",
        },
        {
          title: "Company & HR/Staffing",
          description:
            "From recruitment platforms to workforce management systems, we develop web applications that streamline hiring, optimize operations, and empower your HR teams.",
          cta: "Explore HR Solutions →",
        },
      ],
    },
    whatWeBuild: {
      heading: "Comprehensive Web Solutions for Every Business Need",
      description:
        "Our full-stack development expertise covers everything from customer-facing portals to complex enterprise systems.",
      items: [
        {
          title: "Custom Web Applications",
          description:
            "Tailored solutions built from scratch to address your unique business processes, workflows, and operational requirements with complete flexibility.",
        },
        {
          title: "Enterprise Portals",
          description:
            "Centralized platforms that connect employees, customers, and partners with secure access to information, tools, and collaborative workspaces.",
        },
        {
          title: "E-Commerce Platforms",
          description:
            "Complete online retail solutions with product management, payment processing, order fulfillment, and customer engagement capabilities.",
        },
        {
          title: "SaaS Applications",
          description:
            "Multi-tenant cloud platforms with subscription management, user authentication, and scalable architecture serving thousands of concurrent users.",
        },
        {
          title: "Management Systems",
          description:
            "Comprehensive business operation tools for inventory, orders, customers, employees, and resources with real-time tracking and reporting.",
        },
        {
          title: "Analytics Dashboards",
          description:
            "Data visualization platforms that transform complex information into actionable insights through interactive charts, reports, and KPI monitoring.",
        },
      ],
    },
    developmentProcess: {
      heading: "How We Build Your Web Application",
      description:
        "A proven methodology that ensures quality, transparency, and timely delivery.",
      steps: [
        {
          step: 1,
          title: "Discovery & Planning",
          description:
            "We analyze your requirements, define project scope, create technical specifications, and establish clear milestones and success metrics.",
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description:
            "We craft wireframes, design user interfaces, and build interactive prototypes for your feedback before development begins.",
        },
        {
          step: 3,
          title: "Development & Testing",
          description:
            "We build your application using agile sprints, conduct rigorous quality assurance, and ensure cross-browser compatibility and performance.",
        },
        {
          step: 4,
          title: "Deployment & Support",
          description:
            "We launch your application on production servers, provide team training, and offer ongoing maintenance with regular updates and monitoring.",
        },
      ],
    },
    benefits: {
      heading: "The Zenthink Advantage",
      description:
        "Why leading businesses choose us for their web application development.",
      cards: [
        {
          title: "Faster Time to Market",
          description:
            "Our agile methodology and experienced team delivers production-ready applications 30% faster than industry average.",
        },
        {
          title: "Cost-Effective Solutions",
          description:
            "Efficient development processes and reusable components reduce costs without compromising quality or functionality.",
        },
        {
          title: "Future-Proof Technology",
          description:
            "Modern tech stacks and scalable architecture ensure your application stays relevant and performs as your business grows.",
        },
        {
          title: "Ongoing Partnership",
          description:
            "Beyond launch, we provide continuous support, updates, and strategic guidance to maximize your investment.",
        },
      ],
      developmentApproaches: [
        {
          title: "Native Development",
          bestFor: "Performance-critical, complex apps",
          advantages: [
            "Maximum performance and responsiveness",
            "Full access to device capabilities",
            "Superior user experience",
          ],
        },
        {
          title: "Cross-Platform",
          bestFor: "Faster launch, consistent experience",
          advantages: [
            "Single codebase for iOS & Android",
            "40% faster time to market",
            "Lower development costs",
          ],
        },
      ],
    },
  },

  {
    title: "Mobile Application Development That Connects Your Business",
    slug: "mobile-application",
    desc: "Transforming User Experience with Native and Cross-Platform Apps",
    banner: "/Gemini_Generated_Image_vvqbp3vvqbp3vvqb.png",
    stats: [
      { value: "5M+", label: "App Downloads" },
      { value: "50K+", label: "Active Users Daily" },
      { value: "4.8★", label: "Average App Rating" },
    ],
    whyChoose: [
      {
        name: "Native & Cross-Platform",
        desc: "Built with optimal technology—native iOS/Android or Flutter/React Native for faster deployment.",
      },
      {
        name: "Intuitive User Experience",
        desc: "Seamless UI with smooth animations, gesture controls, and accessibility features.",
      },
      {
        name: "Offline Functionality",
        desc: "Local data storage ensures your app works even without internet.",
      },
      {
        name: "Push Notifications",
        desc: "Real-time engagement updates that increase user retention.",
      },
    ],
    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "₹1599",
        image: "/ai-in-robotics-surgery23.jpg",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "₹1899",
        image: "/cover-14.webp",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],
    products: [
      {
        name: "Patient Analytics App",
        price: "₹499",
        image: "/revmaxx-Product.svg",
      },
      {
        name: "AI Medical Bot",
        price: "₹799",
        image: "/ai-doctor-bot-stethoscope-medical-600nw-2671534203.webp",
      },
      {
        name: "Hospital BI Dashboard",
        price: "₹1299",
        image: "/Hospital-Industry.png",
      },
    ],
    industriesWeServe: {
      heading: "Mobile Solutions Tailored to Your Industry",
      description:
        "We create specialized mobile applications that address the unique requirements and workflows of your business sector.",
      cards: [
        {
          title: "Retail & E-Commerce",
          description:
            "From mobile shopping apps to inventory scanners, we build applications that enhance customer experience, streamline operations, and boost sales on-the-go.",
          cta: "Explore Retail Mobile Solutions →",
        },
        {
          title: "Company & HR/Staffing",
          description:
            "From recruitment apps to employee portals, we develop mobile solutions that empower HR teams, enable remote work, and improve workforce engagement.",
          cta: "Explore HR Mobile Solutions →",
        },
      ],
    },
    whatWeBuild: {
      heading: "Comprehensive Mobile Solutions for Every Platform",
      description:
        "Our mobile development expertise covers iOS, Android, and cross-platform solutions for diverse business needs.",
      items: [
        {
          title: "Native iOS Applications",
          description:
            "Swift-based iPhone and iPad apps with perfect iOS integration, optimized performance, and adherence to Apple's strict design guidelines.",
        },
        {
          title: "Native Android Applications",
          description:
            "Kotlin-based Android apps compatible across devices, leveraging Google's Material Design for consistent and familiar user experiences.",
        },
        {
          title: "Cross-Platform Apps",
          description:
            "Flutter and React Native solutions that work seamlessly on both iOS and Android, reducing development time and cost significantly.",
        },
        {
          title: "Progressive Web Apps (PWA)",
          description:
            "Web-based apps with native-like functionality, offline access, and home screen installation without app store distribution requirements.",
        },
        {
          title: "Enterprise Mobile Apps",
          description:
            "Secure business applications with device management, authentication integration, and compliance features for internal teams and operations.",
        },
        {
          title: "Consumer Mobile Apps",
          description:
            "Customer-facing applications with social integration, in-app purchases, ratings/reviews, and engaging features that drive user retention.",
        },
      ],
    },
    developmentProcess: {
      heading: "How We Build Your Mobile Application",
      description:
        "A streamlined approach that delivers high-quality apps on schedule and within budget.",
      steps: [
        {
          step: 1,
          title: "Strategy & Planning",
          description:
            "We define your target audience, analyze competitor apps, establish feature priorities, and determine the optimal platform approach for your goals.",
        },
        {
          step: 2,
          title: "UI/UX Design",
          description:
            "We create platform-specific designs, interactive prototypes, and user flows validated through testing before any code is written.",
        },
        {
          step: 3,
          title: "Development & Integration",
          description:
            "We build your app using agile methodology, integrate backend APIs, implement features iteratively, and conduct continuous testing throughout.",
        },
        {
          step: 4,
          title: "Testing & Launch",
          description:
            "We perform comprehensive QA across devices, optimize performance, handle app store submissions, and ensure smooth deployment to users.",
        },
      ],
    },
    benefits: {
      heading: "Why Businesses Choose Our Mobile Development",
      description:
        "Delivering exceptional mobile experiences that drive engagement and business growth.",
      cards: [
        {
          title: "Platform Expertise",
          description:
            "Deep knowledge of iOS and Android ecosystems ensures apps that feel native, perform smoothly, and pass app store reviews first time.",
        },
        {
          title: "Proven Track Record",
          description:
            "Successfully launched 100+ mobile apps with millions of combined downloads, maintaining high ratings and positive user feedback consistently.",
        },
        {
          title: "Ongoing Optimization",
          description:
            "Post-launch analytics monitoring, crash reporting, performance tuning, and regular updates keep your app competitive and bug-free.",
        },
        {
          title: "App Store Success",
          description:
            "Complete support with app store optimization, compelling screenshots, video previews, and descriptions that maximize downloads and visibility.",
        },
      ],
      developmentApproaches: [
        {
          title:
            "Native Development Best for: Performance-critical apps, complex features, optimal user experience",
          bestFor:
            "Performance-critical apps, complex features, optimal user experience",
          advantages: [
            "Maximum performance and responsiveness",
            "Full access to device capabilities",
            "Best platform integration",
            "Superior user experience",
          ],
        },
        {
          title:
            "Cross-Platform Development Best for: Faster launch, budget efficiency, consistent experience",
          bestFor: "Faster launch, budget efficiency, consistent experience",
          advantages: [
            "Single codebase for iOS & Android",
            "40% faster time to market",
            "Lower development costs",
            "Easier maintenance",
          ],
        },
        {
          title:
            "Progressive Web App (PWA) Best for: Web-first approach, no app store needed",
          bestFor: "Web-first approach, no app store needed",
          advantages: [
            "Instant updates without approval",
            "Works across all devices",
            "No download required",
            "Lower barrier to entry",
          ],
        },
      ],
    },
  },

  {
    title: "Legacy System Modernization That Transforms Your Business",
    slug: "legacy-modernization",
    desc: "Eliminate Technical Debt and Unlock Growth with Modern Cloud Architecture",
    banner: "/Gemini_Generated_Image_fk65wofk65wofk65.png",
    stats: [
      { value: "70%", label: "Cost Reduction Achieved" },
      { value: "3x", label: "Performance Improvement" },
      { value: "90%", label: " Faster Deployment" },
    ],
    whyChoose: [
      {
        name: "Zero Data Loss ",
        desc: "Comprehensive migration strategies with rigorous testing ensure 100% data integrity, complete audit trails, and seamless transition of historical records.",
      },
      {
        name: "Business Continuity",
        desc: "Phased modernization approach maintains operations throughout transformation with parallel systems, gradual cutover, and rollback safeguards built-in.",
      },
      {
        name: "Future-Proof Architecture ",
        desc: "Cloud-native design with microservices, scalable infrastructure, and API-first approach that adapts to evolving business needs effortlessly",
      },
      {
        name: "Cost Optimization ",
        desc: "Reduce infrastructure costs by 40-70% through cloud migration, automated processes, and elimination of expensive legacy licensing and hardware",
      },
    ],
    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "₹1599",
        image: "/ai-in-robotics-surgery23.jpg",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "₹1899",
        image: "/cover-14.webp",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],
    products: [
      {
        name: "Patient Analytics App",
        price: "₹499",
        image: "/revmaxx-Product.svg",
      },
      {
        name: "AI Medical Bot",
        price: "₹799",
        image: "/ai-doctor-bot-stethoscope-medical-600nw-2671534203.webp",
      },
      {
        name: "Hospital BI Dashboard",
        price: "₹1299",
        image: "/Hospital-Industry.png",
      },
    ],
    industriesWeServe: {
      heading: "Modernizing Systems Across Critical Industries",
      description:
        "We understand industry-specific challenges and regulatory requirements that make legacy modernization complex.",
      cards: [
        {
          title: "Retail & E-Commerce",
          description:
            "Transform outdated inventory systems, POS platforms, and e-commerce backends into modern, omnichannel solutions that handle peak traffic and integrate seamlessly.",
          cta: "Explore Retail Mobile Solutions →",
        },
        {
          title: "Company & HR/Staffing",
          description:
            "Modernize legacy HRIS, payroll systems, and recruitment platforms into cloud-based solutions with mobile access, automation, and real-time analytics capabilities.",
          cta: "Explore HR Mobile Solutions →",
        },
      ],
    },
    whatWeBuild: {
      heading: "Comprehensive Mobile Solutions for Every Platform",
      description:
        "From monolithic applications to outdated databases—we transform legacy technology into modern, efficient solutions.",
      items: [
        {
          title: "Monolithic to Microservices ",
          description:
            "Break down complex monolithic applications into independent microservices for better scalability, faster updates, and isolated failure handling.",
        },
        {
          title: "On-Premise to Cloud ",
          description:
            "Migrate legacy infrastructure to AWS, Azure, or Google Cloud with optimized architecture, automated scaling, and reduced operational overhead.",
        },
        {
          title: "Legacy Database Migration ",
          description:
            "Transition from outdated databases to modern systems like PostgreSQL, MongoDB, or cloud-native databases with improved performance and reliability.",
        },
        {
          title: "Desktop to Web/Mobile ",
          description:
            "Convert legacy desktop applications into responsive web apps and native mobile applications accessible anywhere, anytime, on any device",
        },
        {
          title: "API Modernization",
          description:
            "Replace SOAP and outdated protocols with RESTful APIs and GraphQL, enabling seamless integration with modern systems and third-party services",
        },
        {
          title: "UI/UX Redesign",
          description:
            "Transform outdated interfaces into intuitive, modern designs that improve user adoption, reduce training time, and boost productivity significantly.",
        },
      ],
    },
    developmentProcess: {
      heading: "Our Proven 6-Phase Modernization Process",
      description:
        "A risk-mitigated methodology that ensures successful transformation with minimal business disruption.",
      steps: [
        {
          step: 1,
          title: "Assessment & Analysis",
          description:
            "Comprehensive audit of existing systems, code review, dependency mapping, performance benchmarking, and identification of modernization priorities and risks.",
        },
        {
          step: 2,
          title: "Strategy & Roadmap",
          description:
            "Define modernization approach (rehost, replatform, refactor, rebuild), create phased migration plan, establish KPIs, and develop risk mitigation strategies.",
        },
        {
          step: 3,
          title: "Architecture Design",
          description:
            "Design modern cloud architecture, microservices structure, API layer, database schema, security framework, and integration points with documentation.",
        },
        {
          step: 4,
          title: "Migration & Development",
          description:
            "Execute phased migration using blue-green deployment, conduct parallel runs, implement new features, and ensure zero downtime during transition.",
        },
        {
          step: 5,
          title: "Testing & Validation",
          description:
            "Rigorous functional testing, performance benchmarking, security audits, data integrity verification, and user acceptance testing across all scenarios.",
        },
        {
          step: 6,
          title: "Training & Support",
          description:
            "Comprehensive user training, documentation delivery, knowledge transfer, 24/7 post-migration support, and continuous optimization based on feedback.",
        },
      ],
    },

    benefits: {
      heading: "The Business Impact of Modernization",
      description:
        "Real benefits that directly affect your bottom line and competitive position.",
      cards: [
        {
          title: "Reduce Operating Costs",
          description:
            "Cut infrastructure costs 40-70%, eliminate expensive licensing, reduce maintenance staff requirements, and optimize resource utilization through automation.",
        },
        {
          title: "Improve Performance",
          description:
            "Experience 3-5x faster response times, handle 10x more concurrent users, eliminate downtime, and scale instantly during peak demand.",
        },
        {
          title: "Enhance Security",
          description:
            "Modern encryption, automated patching, compliance certifications, threat detection, and disaster recovery capabilities protecting your critical assets.",
        },
        {
          title: "Accelerate Innovation",
          description:
            "Deploy new features in days instead of months, experiment rapidly, integrate AI/ML capabilities, and respond quickly to market changes.",
        },
        {
          title: "Enable Mobility",
          description:
            "Access systems from anywhere on any device, empower remote teams, improve field operations, and enhance customer engagement.",
        },
        {
          title: "Ensure Compliance",
          description:
            "Meet GDPR, HIPAA, PCI-DSS, SOC 2 requirements with built-in compliance features, audit trails, and automated reporting capabilities.",
        },
      ],
    },
  },

  {
    title: "API Development & Integration That Connects Your Ecosystem",
    slug: "api-development-integration",
    desc: "Build Seamless Integrations and Unlock Data Flow Across Your Platforms",
    banner: "/34bcde35-3cba-43cb-90ef-7d0ea5080a62.png",
    stats: [
      { value: "10k%", label: "APIs Integrated" },
      { value: "99.9%", label: "Uptime Guaranteed" },
      { value: "<100ms", label: " Average Response Time" },
    ],
    whyChoose: [
      {
        name: "RESTful & GraphQL Expertise",
        desc: "Modern API architectures with comprehensive documentation, versioning strategies, and developer-friendly endpoints that follow industry best practices.",
      },
      {
        name: "Enterprise-Grade Security",
        desc: "OAuth 2.0 authentication, API key management, rate limiting, encryption in transit, and comprehensive audit logging protecting your sensitive data.",
      },
      {
        name: "Scalable Infrastructure",
        desc: "Cloud-native API gateways handling millions of requests, auto-scaling capabilities, load balancing, and failover mechanisms ensuring consistent performance.",
      },
      {
        name: "Comprehensive Documentation",
        desc: "Interactive API documentation with Swagger/OpenAPI, code examples in multiple languages, testing sandboxes, and developer portals for easy adoption.",
      },
    ],
    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "₹1599",
        image: "/ai-in-robotics-surgery23.jpg",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "₹1899",
        image: "/cover-14.webp",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],
    products: [
      {
        name: "Patient Analytics App",
        price: "₹499",
        image: "/revmaxx-Product.svg",
      },
      {
        name: "AI Medical Bot",
        price: "₹799",
        image: "/ai-doctor-bot-stethoscope-medical-600nw-2671534203.webp",
      },
      {
        name: "Hospital BI Dashboard",
        price: "₹1299",
        image: "/Hospital-Industry.png",
      },
    ],
    industriesWeServe: {
      heading: "API Solutions Powering Industry Leaders",
      description:
        "We build integration solutions tailored to your industry's unique data exchange requirements and compliance standards.",
      cards: [
        {
          title: "Retail & E-Commerce",
          description:
            "Connect inventory systems, payment gateways, shipping providers, marketplaces, POS systems, and analytics platforms for unified omnichannel operations.",
          cta: "Explore Retail API Solutions →",
        },
        {
          title: "Company & HR/Staffing",
          description:
            "Integrate HRIS, payroll, ATS, background check providers, benefits platforms, and timekeeping systems for seamless workforce management.",
          cta: "Explore HR API Solutions →",
        },
      ],
    },

    whatWeBuild: {
      heading: "Complete API Solutions for Every Integration Need",
      description:
        "From custom API development to third-party integrations—we connect your entire technology stack seamlessly.",
      items: [
        {
          title: "Custom API Development",
          description:
            "Build proprietary APIs from scratch with custom business logic, data models, authentication, and endpoints tailored to your exact requirements.",
        },
        {
          title: "Third-Party Integrations",
          description:
            "Connect with popular platforms like Salesforce, Stripe, Shopify, QuickBooks, Slack, and 1000+ other services through robust API integrations.",
        },
        {
          title: "API Gateway Implementation",
          description:
            "Deploy enterprise API management with Kong, AWS API Gateway, or Azure API Management for centralized control, monitoring, and security.",
        },
        {
          title: "Microservices Architecture",
          description:
            "Design service-oriented architectures where independent microservices communicate via APIs, enabling agility, scalability, and fault isolation.",
        },
        {
          title: "Webhook Development",
          description:
            "Implement real-time event-driven integrations that trigger actions instantly across systems without polling or delays.",
        },
        {
          title: "Data Synchronization",
          description:
            "Build bidirectional sync between systems ensuring data consistency, conflict resolution, and real-time updates across your technology landscape.",
        },
      ],
    },
    developmentProcess: {
      heading: "Our Proven 6-Phase Modernization Process",
      description:
        "A risk-mitigated methodology that ensures successful transformation with minimal business disruption.",
      steps: [
        {
          step: 1,
          title: "Assessment & Analysis",
          description:
            "Comprehensive audit of existing systems, code review, dependency mapping, performance benchmarking, and identification of modernization priorities and risks.",
        },
        {
          step: 2,
          title: "Strategy & Roadmap",
          description:
            "Define modernization approach (rehost, replatform, refactor, rebuild), create phased migration plan, establish KPIs, and develop risk mitigation strategies.",
        },
        {
          step: 3,
          title: "Architecture Design",
          description:
            "Design modern cloud architecture, microservices structure, API layer, database schema, security framework, and integration points with documentation.",
        },
        {
          step: 4,
          title: "Migration & Development",
          description:
            "Execute phased migration using blue-green deployment, conduct parallel runs, implement new features, and ensure zero downtime during transition.",
        },
        {
          step: 5,
          title: "Testing & Validation",
          description:
            "Rigorous functional testing, performance benchmarking, security audits, data integrity verification, and user acceptance testing across all scenarios.",
        },
        {
          step: 6,
          title: "Training & Support",
          description:
            "Comprehensive user training, documentation delivery, knowledge transfer, 24/7 post-migration support, and continuous optimization based on feedback.",
        },
      ],
    },

    benefits: {
      heading: "The Business Impact of API Integration",
      description:
        "Transform disconnected systems into a unified, automated ecosystem that drives efficiency.",
      cards: [
        {
          title: "Eliminate Manual Data Entry",
          description:
            "Automated data sync between systems eliminates duplicate entry, reduces human errors by 95%, and frees your team for strategic work.",
        },
        {
          title: "Real-Time Data Access",
          description:
            "Instant data availability across platforms enables faster decision-making, improved customer experiences, and immediate response to business changes.",
        },
        {
          title: "Accelerate Development",
          description:
            "Well-documented APIs enable rapid feature development, third-party integrations, and mobile app connectivity reducing time-to-market by 60%.",
        },
        {
          title: "Scale Effortlessly",
          description:
            "API-first architecture grows with your business, handles increasing traffic automatically, and makes adding new systems or features simple.",
        },
        {
          title: "Unlock New Revenue",
          description:
            "Expose your services via APIs to partners and developers, create new distribution channels, and generate additional revenue streams.",
        },
        {
          title: "Reduce IT Complexity",
          description:
            "A centralized API layer simplifies your tech stack, reduces maintenance overhead, and makes system upgrades or replacements easier.",
        },
      ],
    },
  },

  {
    title: "AI-Enhanced Solutions That Amplify Human Intelligence",
    slug: "ai-enhanced-solutions",
    desc: "Transform Operations with Machine Learning, Automation, and Predictive Analytics",
    banner: "/Gemini_Generated_Image_ysp2wjysp2wjysp2.png",
    stats: [
      { value: "10k%", label: "Task Automation Achieved" },
      { value: "10x", label: " Faster Data Processing" },
      { value: "40%", label: "Cost Reduction Average" },
    ],
    whyChoose: [
      {
        name: "Business-Focused AI",
        desc: "Pragmatic implementations solving real problems with measurable outcomes—not experimental AI for its own sake but targeted solutions driving ROI.",
      },
      {
        name: "Seamless Integration",
        desc: "AI capabilities that integrate naturally into existing workflows, systems, and processes without requiring complete technology overhauls or disruption.",
      },
      {
        name: "Transparent & Explainable",
        desc: "Understand how AI reaches conclusions with explainable models, audit trails, and confidence scores—no mysterious black boxes making critical decisions.",
      },
      {
        name: "Continuous Learning",
        desc: "Models that improve over time through feedback loops, retraining schedules, and performance monitoring ensuring accuracy increases with usage.",
      },
    ],
    topProducts: [
      {
        title: "AI Diagnosis Engine",
        desc: "AI-powered system that assists doctors...",
        price: "₹1599",
        image: "/ai-in-robotics-surgery23.jpg",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
      {
        title: "Medical Analytics Dashboard",
        desc: "Centralized analytics for hospitals...",
        price: "₹1899",
        image: "/cover-14.webp",
        features: [
          "Smart predictions",
          "Fast diagnosis support",
          "Accurate medical insights",
        ],
      },
    ],
    products: [
      {
        name: "Patient Analytics App",
        price: "₹499",
        image: "/revmaxx-Product.svg",
      },
      {
        name: "AI Medical Bot",
        price: "₹799",
        image: "/ai-doctor-bot-stethoscope-medical-600nw-2671534203.webp",
      },
      {
        name: "Hospital BI Dashboard",
        price: "₹1299",
        image: "/Hospital-Industry.png",
      },
    ],
    industriesWeServe: {
      heading: "AI Solutions Transforming Industry Operations",
      description:
        "We implement intelligent automation tailored to your industry's specific challenges, workflows, and compliance requirements.",
      cards: [
        {
          title: "Retail & E-Commerce",
          description:
            "Personalized recommendations, demand forecasting, dynamic pricing, inventory optimization, visual search, and chatbots that increase sales and reduce costs.",
          cta: "Explore Retail AI Solutions →",
        },
        {
          title: "Company & HR/Staffing",
          description:
            "Resume screening, candidate matching, employee sentiment analysis, turnover prediction, skill gap identification, and automated interview scheduling.",
          cta: "Explore HR AI Solutions →",
        },
      ],
    },

    whatWeBuild: {
      heading: "Comprehensive AI Capabilities for Every Business Function",
      description:
        "From intelligent automation to predictive analytics—we infuse AI across your operations to multiply productivity and insights.",
      items: [
        {
          title: "Intelligent Process Automation",
          description:
            "Automate complex workflows combining RPA with AI decision-making—from invoice processing to customer onboarding, handling exceptions humans previously managed.",
        },
        {
          title: "Predictive Analytics",
          description:
            "Forecast demand, predict customer churn, anticipate equipment failures, and identify trends before competitors using advanced machine learning models.",
        },
        {
          title: "Natural Language Processing",
          description:
            "Extract insights from documents, automate customer support, analyze sentiment, categorize content, and enable conversational interfaces with AI-powered understanding.",
        },
        {
          title: "Computer Vision",
          description:
            "Automated quality inspection, document digitization, visual search, facial recognition, object detection, and image classification for operational efficiency.",
        },
        {
          title: "Recommendation Engines",
          description:
            "Personalized product suggestions, content recommendations, next-best-action guidance, and cross-sell opportunities increasing revenue per customer significantly.",
        },
        {
          title: "Chatbots & Virtual Assistants",
          description:
            "24/7 customer support, employee self-service, lead qualification, appointment scheduling, and FAQ automation reducing support costs while improving satisfaction.",
        },
      ],
    },
    developmentProcess: {
      heading: "Our Proven 6-Phase Modernization Process",
      description:
        "A risk-mitigated methodology that ensures successful transformation with minimal business disruption.",
      steps: [
        {
          step: 1,
          title: "Assessment & Analysis",
          description:
            "Comprehensive audit of existing systems, code review, dependency mapping, performance benchmarking, and identification of modernization priorities and risks.",
        },
        {
          step: 2,
          title: "Strategy & Roadmap",
          description:
            "Define modernization approach (rehost, replatform, refactor, rebuild), create phased migration plan, establish KPIs, and develop risk mitigation strategies.",
        },
        {
          step: 3,
          title: "Architecture Design",
          description:
            "Design modern cloud architecture, microservices structure, API layer, database schema, security framework, and integration points with documentation.",
        },
        {
          step: 4,
          title: "Migration & Development",
          description:
            "Execute phased migration using blue-green deployment, conduct parallel runs, implement new features, and ensure zero downtime during transition.",
        },
        {
          step: 5,
          title: "Testing & Validation",
          description:
            "Rigorous functional testing, performance benchmarking, security audits, data integrity verification, and user acceptance testing across all scenarios.",
        },
        {
          step: 6,
          title: "Training & Support",
          description:
            "Comprehensive user training, documentation delivery, knowledge transfer, 24/7 post-migration support, and continuous optimization based on feedback.",
        },
      ],
    },

    benefits: {
      heading: "The Business Impact of API Integration",
      description:
        "Transform disconnected systems into a unified, automated ecosystem that drives efficiency.",
      cards: [
        {
          title: "Eliminate Manual Data Entry",
          description:
            "Automated data sync between systems eliminates duplicate entry, reduces human errors by 95%, and frees your team for strategic work.",
        },
        {
          title: "Real-Time Data Access",
          description:
            "Instant data availability across platforms enables faster decision-making, improved customer experiences, and immediate response to business changes.",
        },
        {
          title: "Accelerate Development",
          description:
            "Well-documented APIs enable rapid feature development, third-party integrations, and mobile app connectivity reducing time-to-market by 60%.",
        },
        {
          title: "Scale Effortlessly",
          description:
            "API-first architecture grows with your business, handles increasing traffic automatically, and makes adding new systems or features simple.",
        },
        {
          title: "Unlock New Revenue",
          description:
            "Expose your services via APIs to partners and developers, create new distribution channels, and generate additional revenue streams.",
        },
        {
          title: "Reduce IT Complexity",
          description:
            "A centralized API layer simplifies your tech stack, reduces maintenance overhead, and makes system upgrades or replacements easier.",
        },
      ],
    },
  },
];

export default function ServiceDetails() {
  const { serviceid } = useParams();
  const router = useRouter();
  const industry = industriesData.find((d) => d.slug === serviceid);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-neutral-600">
          404 | Page Not Found
        </h1>
      </div>
    );
  }

  // whyChoose split
  const whyLeft = industry.whyChoose.slice(0, 2);
  const whyRight = industry.whyChoose.slice(2, 4);
  //our solutions
  const isCarousel = industry.products.length > 3;

  return (
    <div className="relative min-h-screen">
      {/* Fixed background gradient - Same as Service page */}
      <div className="fixed inset-0 bg-gradient-to-bl from-[#ffffff] via-[#fdfffa] to-[#f2fde4] -z-10" />

      {/* Content */}
      <div className="relative z-0">
        <Navbar />

        {/* HERO SECTION - Updated with HeroSection styles */}
        <section className="relative overflow-hidden text-black w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 lg:gap-12"
            >
              <div className="lg:flex-1">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium leading-[1.2] md:leading-[1.1] text-black"
                >
                  {industry.title.split(" ").slice(0, 3).join(" ")}{" "}
                  <span className="text-neutral-500">
                    {industry.title.split(" ").slice(3).join(" ")}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-neutral-600 mt-4 xs:mt-5 sm:mt-6 text-[14px] sm:text-lg max-w-2xl"
                >
                  {industry.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 mt-4 sm:mt-6"
                >
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden rounded-lg bg-black px-10 sm:px-6 py-2.5 xs:py-3 sm:py-3 text-white font-medium group cursor-pointer"
                  >
                    <button
                      onClick={() => router.push("/Contact")}
                      className="relative z-10 text-[14px] sm:text-md"
                    >
                      Request a Quote
                    </button>
                    <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                  </motion.div>

                  <div className="flex flex-row gap-4 xs:gap-6 sm:gap-8 text-start md:text-center">
                    {industry.stats.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-black text-2xl sm:text-3xl font-semibold">
                          {item.value}
                        </h3>
                        <p className="text-neutral-600 text-[12px] sm:text-[13px]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0"
              >
                <div className="relative w-[250px] h-[250px] xs:w-[280px] xs:h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-500/20 to-transparent blur-2xl sm:blur-3xl"
                  />
                  <Image
                    src={industry.banner}
                    alt={industry.title}
                    fill
                    className=" w-full relative z-10 rounded-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        

        {/* Why Choose Section - Updated with AboutUs styles */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-md sm:text-lg text-neutral-900 mb-3 flex items-center gap-2">
                Why Choose {industry.title.split(" ")[0]}?
                <span>
                  <Image
                    src="/badge-icon.webp"
                    alt="badge"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </span>
              </p>

              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 xs:gap-8 items-start">
                {/* Left: Heading */}
                <div>
                  <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                    Driving Principles of Our Solutions
                  </h2>
                </div>

                {/* Right: Description */}
                <div>
                  <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    Discover powerful solutions designed to elevate your
                    business operations and drive results.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center">
              {/* Left features */}
              <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
                {whyLeft.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs"
                  >
                    <h3 className="text-black text-base xs:text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                      {item.name}
                    </h3>
                    <p className="text-neutral-600 text-xs xs:text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Center image */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center"
                >
                  <div className="absolute w-full h-full rounded-xl sm:rounded-2xl"></div>
                  <Image
                    src="/6e37509e-415e-4415-9bdd-11bd1f49992e.png"
                    alt="Service Illustration"
                    width={300}
                    height={300}
                    className="relative z-10 object-contain w-70 h-3/4"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                  />
                </motion.div>
              </div>

              {/* Right features */}
              <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
                {whyRight.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs"
                  >
                    <h3 className="text-black text-base xs:text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                      {item.name}
                    </h3>
                    <p className="text-neutral-600 text-xs xs:text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Top Products Section - Updated with RecentWork styles */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-md sm:text-lg md:text-xl text-neutral-800 mb-3 flex items-center gap-1">
                Premium Solutions
                <span>
                  <Image
                    src="/badge-icon.jpg"
                    alt="badge"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </span>
              </p>

              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 mb-8 sm:mb-12">
                <h2 className="text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 leading-[1.2] sm:leading-tight tracking-tight">
                  Discover Our Premium Solutions
                </h2>
                <p className="text-neutral-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  Explore premium software solutions crafted to bring
                  automation, efficiency and intelligent workflows.
                </p>
              </div>
            </motion.div>

            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {industry.topProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center ₹{
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center">
                      <div className="absolute w-full h-full bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl"></div>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="relative z-10  w-3/4 h-3/4 rounded-2xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-3 sm:mb-4">
                      {product.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 sm:mb-6 text-[14px] xs:text-base">
                      {product.desc}
                    </p>

                    {product.features && product.features.length > 0 && (
                      <ul className="space-y-1 xs:space-y-2 mb-4 sm:mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 xs:gap-3"
                          >
                            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-neutral-800 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
                            <span className="text-neutral-700 text-sm xs:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4">
                      <div
                        onClick={() => router.push("/Contact")}
                        className="relative overflow-hidden rounded-lg bg-black px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-white font-medium group cursor-pointer"
                      >
                        <span className="relative z-10 text-sm xs:text-base">
                          Get Started
                        </span>
                        <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                      </div>
                      <p className="text-lg sm:text-xl font-semibold text-black">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Carousel Section */}

        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-start md:text-center mb-8 sm:mb-10 md:mb-12"
            >
              <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-4xl font-semibold text-black mb-3 sm:mb-4">
                Our Solutions
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto text-[14px] xs:text-base">
                Discover tools designed for performance, automation and
                innovation.
              </p>
            </motion.div>

            <div className="relative">
              {isCarousel && (
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 xs:-translate-x-3 sm:-translate-x-4 bg-white shadow-xs p-2 xs:p-3 rounded-full z-10 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    className="w-4 h-4 xs:w-5 xs:h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"
                    />
                  </svg>
                </button>
              )}

              <div
                ref={scrollRef}
                className={`flex gap-4 xs:gap-5 sm:gap-6 px-2 pb-4 scroll-smooth
    ${isCarousel ? "overflow-x-auto justify-start" : "justify-center"}
  `}
                style={
                  isCarousel
                    ? { scrollbarWidth: "none", msOverflowStyle: "none" }
                    : { overflow: "hidden" }
                }
              >
                {industry.products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white shadow-xs rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200
  ${isCarousel ? "min-w-[240px] xs:min-w-[260px] sm:min-w-[280px] flex-shrink-0" : "w-[260px]"}
`}
                  >
                    <div className="relative  w-full h-36 xs:h-40 sm:h-48 rounded-lg xs:rounded-xl flex items-center justify-center mb-4 xs:mb-5 sm:mb-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={120}
                        height={120}
                        className="object-contain w-30 h-30 xs:w-24 xs:h-24"
                      />
                    </div>

                    <h3 className="text-base xs:text-lg font-semibold text-black mb-2">
                      {product.name}
                    </h3>

                    <div className="flex justify-between items-center">
                      <div
                        onClick={() => router.push("/Contact")}
                        className="relative overflow-hidden rounded-lg bg-black px-3 xs:px-4 py-1.5 xs:py-2 text-white text-xs xs:text-sm font-medium group cursor-pointer"
                      >
                        <span className="relative z-10">Learn More</span>
                        <span className="absolute inset-0 rounded-lg bg-lime-500 transform translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                      </div>
                      <p className="font-semibold text-lime-500 text-sm xs:text-base">
                        {product.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {isCarousel && (
                <button
                  onClick={scrollRight}
                  className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-2 xs:translate-x-3 sm:translate-x-4 bg-white shadow-xs p-2 xs:p-3 rounded-full z-10 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    className="w-4 h-4 xs:w-5 xs:h-5"
                    viewBox="0 0 24 24"
                  >
                    <g transform="rotate(180 12 12)">
                      <path
                        fill="currentColor"
                        d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"
                      />
                    </g>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ------------------ NEW JSON SECTIONS ------------------ */}

        {/* 1) Industries We Serve */}
        {industry.industriesWeServe && (
          <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-start md:text-center mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-4xl font-semibold text-black mb-3 sm:mb-4">
                  {industry.industriesWeServe.heading}
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto text-[14px] sm:text-lg">
                  {industry.industriesWeServe.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                {industry.industriesWeServe.cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs"
                  >
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-black mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 mb-3 sm:mb-4 text-[14px] xs:text-base">
                      {card.description}
                    </p>
                    {card.cta && (
                      <button className="text-black font-medium hover:text-lime-600 transition-colors text-sm xs:text-base">
                        {card.cta}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2) What We Build */}
        {industry.whatWeBuild && (
          <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-start md:text-center mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-4xl font-semibold text-black mb-3 sm:mb-4">
                  {industry.whatWeBuild.heading}
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto text-[14px] sm:text-lg">
                  {industry.whatWeBuild.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
                {industry.whatWeBuild.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs"
                  >
                    <h3 className="text-base xs:text-lg font-semibold text-black mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-xs xs:text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3) Development Process */}
        {industry.developmentProcess && (
          <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-start md:text-center mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-4xl font-semibold text-black mb-3 sm:mb-4">
                  {industry.developmentProcess.heading}
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto text-[14px] sm:text-lg">
                  {industry.developmentProcess.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
                {industry.developmentProcess.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs h-full">
                      <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-base xs:text-lg mb-3 sm:mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-lg xs:text-xl font-semibold text-black mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 text-xs xs:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4) Benefits */}
        {industry.benefits && (
          <section className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28 bg-gradient-to-b from-white/50 to-[#f8fff8]/50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-start md:text-center mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-[24px] xs:text-[26px] sm:text-[32px] md:text-[38px] lg:text-4xl font-semibold text-black mb-3 sm:mb-4">
                  {industry.benefits.heading}
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto text-[14px] sm:text-lg">
                  {industry.benefits.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                {industry.benefits.cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%) rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-neutral-200 shadow-xs"
                  >
                    <h3 className="text-lg xs:text-xl font-semibold text-black mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 text-xs xs:text-sm">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <TestimonialsSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
